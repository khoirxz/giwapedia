import { useState } from "react";
import { Link } from "react-router-dom";

import { Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon,''  } from "@heroicons/react/24/solid";

const Navbar: React.FC<{ title: string; showItem: boolean }> = ({
  title,
  showItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2 fixed w-full max-w-7xl z-10">
      <div className="backdrop-blur-lg rounded-md p-2">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <h1 className="font-heading text-2xl font-bold text-primary">
                {title}
              </h1>
            </Link>
          </div>
          {showItem ? (
            <div className="hidden gap-8 font-heading font-bold text-primary md:flex">
              <Link to="/" className="cursor-pointer flex items-center gap-1">
                <span>Home</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/layanan"
                className="cursor-pointer flex items-center gap-1"
              >
                <span>Layanan</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="cursor-pointer flex items-center gap-1"
              >
                <span>About</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Link>
            </div>
          ) : null}

          <div className="hidden md:block">
            <button className="border-black border-2 p-2 rounded-lg font-heading font-bold">
              Pesan
            </button>
          </div>

          {!showItem ? (
            <div className="block md:hidden">
              <button className="border-black border-2 p-2 rounded-lg font-heading font-bold">
                Pesan
              </button>
            </div>
          ) : (
            <div className="block md:hidden">
              <button
                className="p-2 rounded-lg font-heading font-bold active:bg-gray-300/40 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {showItem ? (
          <Transition appear show={isOpen} as="div">
            <div className="z-10 relative w-full block md:hidden">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="transform -translate-y-10 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="ease-in duration-200"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-10 opacity-0"
              >
                <div className="backdrop-blur-2xl mt-2 font-heading font-bold flex flex-col gap-3">
                  <Link
                    to="/"
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <span>Home</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/layanan"
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <span>Layanan</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="cursor-pointer flex items-center gap-1"
                  >
                    <span>About</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Transition.Child>
            </div>
          </Transition>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
