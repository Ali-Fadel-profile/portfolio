import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isVisibleHeader, setIsVisibleHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScrollY = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavigation(false);
        setIsVisibleHeader(false);
      } else {
        setShowNavigation(false);
        setIsVisibleHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 top-0 z-20 transition-transform duration-300 ${!isVisibleHeader ? "-translate-y-52" : "translate-y-0"} w-screen border-b-[1px] border-b-off-white bg-white dark:bg-black`}
    >
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {" "}
        <p className="hidden text-heading-s sm:block">{"<Ali />"}</p>
        {/* Hamburger Button */}
        <button
          className="block h-10 w-10 px-1 py-4 sm:hidden"
          onClick={() => setShowNavigation(!showNavigation)}
        >
          <span
            className={`mb-2 block h-1 w-full bg-black transition-all duration-500 dark:bg-white ${showNavigation ? "mb-0 rotate-45" : ""}`}
          ></span>
          <span
            className={`mb-2 block h-1 w-full bg-black transition-all duration-500 dark:bg-white ${showNavigation ? "-translate-y-2.5 -rotate-45" : ""}`}
          ></span>
        </button>
        {/* Navigation */}
        <nav
          className={`fixed left-0 top-0 z-10 flex w-full -translate-y-16 items-center justify-between gap-4 bg-white p-4 transition-transform duration-300 dark:bg-black sm:static sm:ml-auto sm:w-auto sm:-translate-y-0 sm:justify-end sm:border-none ${showNavigation ? "translate-y-[72px]" : ""}`}
        >
          <ul className="flex w-full items-center justify-between gap-4 text-body-m sm:w-auto">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>{" "}
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
