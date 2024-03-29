import { useContext, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import PublicLayout from "../../layout/public";

import { DataContext } from "../../Context";
import { ContextContainerProps } from "../../utils";

const Layanan: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { products, getAllProducts, getAllCategory, serachProduct } =
    useContext<ContextContainerProps>(DataContext);

  useEffect(() => {
    getAllProducts();
    getAllCategory();

    if (keyword) {
      serachProduct(keyword);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <PublicLayout Navs={false}>
      <section className="pt-40 min-h-screen">
        <form className="flex items-center rounded-full gap-2 border border-zinc-300 py-3 px-4 mb-14 shadow-lg font-body">
          <MagnifyingGlassIcon className="w-6 h-6 text-zinc-600/65" />
          <input
            type="text"
            placeholder="Cari layanan anda"
            className=" text-xl w-full outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry gutter="10px">
            {products.allProduct.edges.map((item) => (
              <div key={item.node.id} className="p-5 rounded-lg shadow border">
                <div className={`flex flex-col`}>
                  <h1 className="font-heading font-bold mt-1 text-lg capitalize">
                    {item.node.title}
                  </h1>

                  <div className="font-body my-2 text-sm">
                    <RichTextRenderer node={item.node.description.json} />
                  </div>

                  <p className="font-body text-sm mb-2">
                    Rp. {item.node.price}
                  </p>
                  <button className="font-heading font-bold py-1 bg-blue-700 text-white rounded-xl w-full">
                    <a href="https://wa.me/6285156653244?text=Halo%20admin%20apakah%20produk%20tersedia">
                      Beli
                    </a>
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
