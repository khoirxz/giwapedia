import React, { createContext, ReactNode, useState } from "react";
import { gql, GraphQLClient } from "graphql-request";
import { ContextContainerProps } from "../utils";
import { AllProduct } from "../utils/Types/Product";
import { AllCategory } from "../utils/Types/Category";
import { AllMetaResponse } from "../utils/Types/Meta";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.VITE_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.VITE_API_KEY,
    },
  }
);

const DataContext = createContext<ContextContainerProps>({
  products: {
    allProduct: { edges: [] },
  },
  setProducts: () => {},
  categories: { allCategory: { edges: [] } },
  setCategories: () => {},
  getAllProducts: async () => {},
  getAllCategory: async () => {},
  meta: {
    MetaPage: {
      title: "",
      description: "",
      telephone: "",
      icon: { src: "" },
    },
  },
  getMeta: async () => {},
  serachProduct: async () => {},
});

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<AllProduct>({
    allProduct: {
      edges: [],
    },
  });
  const [categories, setCategories] = useState<AllCategory>({
    allCategory: {
      edges: [],
    },
  });
  const [meta, setMeta] = useState<AllMetaResponse>({
    MetaPage: {
      description: "",
      icon: { src: "" },
      telephone: "",
      title: "",
    },
  });

  const getMeta = async () => {
    const gqlResponse: AllMetaResponse = await client.request(
      gql`
        {
          MetaPage {
            description
            id
            messageText
            telephone
            title
          }
        }
      `
    );

    setMeta(gqlResponse);
  };

  const getAllProducts = async () => {
    const gqlResponse: AllProduct = await client.request(
      gql`
        {
          allProduct(sort: { publishedAt: DESC }) {
            edges {
              node {
                id
                price
                title
                description {
                  json
                }
                categories {
                  title
                }
              }
            }
          }
        }
      `
    );

    setProducts(gqlResponse);
  };

  const getAllCategory = async () => {
    const gqlResponse: AllCategory = await client.request(
      gql`
        {
          allCategory {
            edges {
              node {
                title
                id
              }
            }
          }
        }
      `
    );

    setCategories(gqlResponse);
  };

  const serachProduct = async (product: string) => {
    const gqlResponse: AllProduct = await client.request(
      gql`
        {
          allProduct(where: { title: { contains: "${product.toLowerCase()}" } }) {
            edges {
              node {
                id
                price
                title
                description {
                  json
                }
                categories {
                  title
                }
              }
            }
          }
        }
      `
    );

    setProducts(gqlResponse);
  };

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        getAllProducts,
        categories,
        setCategories,
        getAllCategory,
        meta,
        getMeta,
        serachProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
