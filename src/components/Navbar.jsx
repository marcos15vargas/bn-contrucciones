import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/Logo";

export const Navbar = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setmobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav id="home">
      <header className="bg-azul">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-17 items-center justify-between">
            {/*Navbar*/}
            <div className="flex-1 md:flex md:items-center md:gap-2">
              <a className="block text-red-600 size-16 mt-2" href="#">
                <span className="sr-only">Home</span>
                <Logo color={"#fff"} />
              </a>
            </div>
            {/*Menu Desktop*/}
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        className="text-slate-200 transition hover:text-gray-500/75 uppercase"
                        href="#"
                      >
                        {" "}
                        {item.menu}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button onClick={toggleNavbar} className="mr-1">
                    {mobileDrawerOpen ? (
                      <X color="#fff" className="size-8" />
                    ) : (
                      <Menu color="#fff" className="size-8" />
                    )}
                  </button>
                </div>
              </div>
              {/*Navbar Mobile*/}
              {mobileDrawerOpen && (
                <div className="fixed mt-4 right-0 z-20 bg-azul w-full p-10 flex flex-col justify-center item-center lg:hidden text-center">
                  <ul className="self-center">
                    {navItems.map((item, index) => (
                      <li key={index} className="py-2 text-2xl uppercase">
                        <a className="text-slate-200" href={item.link}>{item.menu}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};
