import React, { createContext, ReactNode, useState } from "react";
import { gql, GraphQLClient } from "graphql-request";
import { AllProduct } from "../utils/Types/Product";
import { ContextContainerProps } from "../utils";
import { AllCategory } from "../utils/Types/Category";

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

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        getAllProducts,
        categories,
        setCategories,
        getAllCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
