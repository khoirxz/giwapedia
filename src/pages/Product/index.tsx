import { gql, GraphQLClient } from "graphql-request";

import PublicLayout from "../../layout/public";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.VITE_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.VITE_API_KEY,
    },
  }
);

interface Product {
  backround: string;
  category: string;
  id: string;
  price: number;
  title: string;
}

interface ProductEdge {
  node: Product;
}

interface AllProductResponse {
  allProduct: {
    edges: ProductEdge[];
  };
}

const gqlResponse: AllProductResponse = await client.request(
  gql`
    {
      allProduct(sort: { publishedAt: DESC }) {
        edges {
          node {
            backround
            category
            id
            price
            title
          }
        }
      }
    }
  `
);

const item = gqlResponse?.allProduct?.edges;

// console.log(item);

const Product: React.FC = () => {
  return (
    <PublicLayout>
      <section className="pt-40 min-h-screen">
        <h1 className="font-heading text-3xl font-bold my-8">
          Produk unggulan
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {item?.map((item) => (
            <div key={item.node.id}>
              <div className={`bg-sky-400/30 p-5 rounded-lg flex flex-col`}>
                <div>
                  <p className="bg-sky-500 inline-block p-1 my-2 text-white rounded-lg font-body text-sm">
                    {item.node.category}
                  </p>
                </div>

                <h1 className="font-heading font-bold mt-1 text-lg">
                  {item.node.title}
                </h1>
                <p className="font-body text-sm mb-2">Rp. {item.node.price}</p>
                <button className="font-heading font-bold py-1 bg-blue-700 text-white rounded-xl w-full">
                  Beli
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Product;
