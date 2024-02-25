import { useContext, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import PublicLayout from "../../layout/public";

import { DataContext } from "../../Context";
import { ContextContainerProps } from "../../utils";

const Layanan: React.FC = () => {
  const { products, getAllProducts, getAllCategory } =
    useContext<ContextContainerProps>(DataContext);

  useEffect(() => {
    getAllProducts();
    getAllCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PublicLayout Navs={false}>
      <section className="pt-40 min-h-screen">
        <form className="flex items-center rounded-full gap-2 border border-zinc-300 py-3 px-4 mb-14 shadow-lg font-body">
          <MagnifyingGlassIcon className="w-6 h-6 text-zinc-600/65" />
          <input
            type="text"
            placeholder="Cari layanan anda"
            className=" text-xl w-full outline-none"
          />
        </form>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry gutter="10px">
            {products.allProduct.edges.map((item) => (
              <div key={item.node.id} className="p-5 rounded-lg shadow border">
                <div className={`flex flex-col`}>
                  <h1 className="font-heading font-bold mt-1 text-lg">
                    {item.node.title}
                  </h1>

                  <div className="font-body my-2 text-sm">
                    <RichTextRenderer node={item.node.description.json} />
                  </div>

                  <p className="font-body text-sm mb-2">
                    Rp. {item.node.price}
                  </p>
                  <button className="font-heading font-bold py-1 bg-blue-700 text-white rounded-xl w-full">
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </PublicLayout>
  );
};

export default Layanan;
