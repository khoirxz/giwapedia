import { ReactNode, useEffect, useContext } from "react";

import { Navbar, Footer } from "../../components";

import { DataContext } from "../../Context";
import { ContextContainerProps } from "../../utils";

interface PublicLayoutProps {
  children: ReactNode;
  Navs: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, Navs }) => {
  const { meta, getMeta } = useContext<ContextContainerProps>(DataContext);

  useEffect(() => {
    getMeta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`max-w-7xl relative mx-auto z-0`}>
        <Navbar title={meta?.MetaPage?.title} showItem={Navs} />

        <div className="px-3">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;
