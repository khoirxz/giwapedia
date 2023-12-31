import { ReactNode } from "react";
import { gql, GraphQLClient } from "graphql-request";

import { Navbar, Footer } from "../../components";

const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${import.meta.env.VITE_PROJECT_ID}/graphql`,
  {
    headers: {
      "x-caisy-apikey": import.meta.env.VITE_API_KEY,
    },
  }
);

interface Meta {
  title: string;
  description: string;
  telephone: string;
  icon: { src: string };
}

interface AllMetaResponse {
  MetaPage: Meta;
}

const gqlResponse: AllMetaResponse = await client.request(
  gql`
    {
      MetaPage {
        title
        description
        telephone
        icon {
          src
        }
      }
    }
  `
);

const meta = gqlResponse.MetaPage;

console.log(meta);

const PublicLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={`max-w-7xl relative mx-auto z-0`}>
        <Navbar title={meta?.title} />
        <div className="px-3">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;
