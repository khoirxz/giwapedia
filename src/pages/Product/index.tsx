import { useContext, useEffect } from "react";

import PublicLayout from "../../layout/public";

import { DataContext } from "../../Context";
import { ContextContainerProps } from "../../utils";

const Product: React.FC = () => {
  const { products, categories, getAllProducts, getAllCategory } =
    useContext<ContextContainerProps>(DataContext);

  useEffect(() => {
    getAllProducts();
    getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PublicLayout>
      <section className="pt-40 min-h-screen">
        <h1 className="font-heading text-3xl font-bold my-8">
          Produk unggulan
        </h1>

        <div className="relative grid custom-cols">
          <div className="">
            <div className="shadow-md p-4 rounded-xl">
              <h1 className="font-body font-bold mt-2 mb-4">Category</h1>
              <div className="flex flex-row gap-3 flex-wrap">
                {categories.allCategory.edges.map((item) => (
                  <button
                    key={item.node.id}
                    className="bg-blue-700 text-white px-3 py-1 rounded-lg border-2 hover:border-blue-200 font-body"
                  >
                    {item.node.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.allProduct.edges.map((item) => (
                <div
                  key={item.node.id}
                  className="h-full w-fh-full 2xl:w-[200px] 2xl:h-[200px] bg-sky-400/30 p-5 rounded-lg"
                >
                  <div className={`flex flex-col`}>
                    <div>
                      <p className="bg-sky-500 inline-block p-1 my-2 text-white rounded-lg font-body text-sm">
                        {item.node.categories.title}
                      </p>
                    </div>

                    <h1 className="font-heading font-bold mt-1 text-lg">
                      {item.node.title}
                    </h1>
                    <p className="font-body text-sm mb-2">
                      Rp. {item.node.price}
                    </p>
                    <button className="font-heading font-bold py-1 bg-blue-700 text-white rounded-xl w-full">
                      Beli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Product;
