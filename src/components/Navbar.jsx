import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";
import { GB, RU } from "country-flag-icons/react/3x2";

function NavList() {
  const { t } = useTranslation();
  return (
    <ul className="my-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {[
        { name: t("main"), path: "/" },
        { name: t("pages"), path: "/pages" },
        { name: t("email"), path: "/contacts" },
        { name: t("shirt"), path: "/products2" },
        { name: t("shoes"), path: "/products" },
      ].map((item) => (
        <Typography
          key={item.name}
          as="li"
          variant="small"
          color="white"
          className="p-2 font-medium uppercase tracking-wider text-white/80 hover:text-white transition-all duration-300 ease-in-out"
        >
          <Link
            to={item.path}
            className="relative flex items-center after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-500"
          >
            {item.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language;

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/80 border-b border-gray-800 shadow-xl bg-black dark:bg-blue-gray-900 text-white dark:text-white">
      <Navbar className="mx-auto max-w-screen-xl px-6 py-4 bg-transparent shadow-none">
        <div className="flex items-center justify-between text-white">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 blur-lg bg-gradient-to-r from-gray-200 via-white to-gray-400 opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-full"></div>
              <Typography
                as="span"
                variant="h5"
                className="cursor-pointer py-1.5 text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-400"
              >
                <Logo />
              </Typography>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <NavList />
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <SunIcon className="h-6 w-6 text-yellow-400 transition-transform duration-300 transform rotate-180" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-300 transition-transform duration-300 transform rotate-180" />
              )}
            </button>

            {/* Language Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`p-[6px] rounded-full border transition-all duration-300 ${
                  currentLang === "en"
                    ? "border-white bg-white/20 scale-110"
                    : "border-transparent hover:bg-white/10 hover:scale-105"
                }`}
              >
                <GB className="w-6 h-6 rounded-full" />
              </button>

              <button
                onClick={() => changeLanguage("ru")}
                className={`p-[6px] rounded-full border transition-all duration-300 ${
                  currentLang === "ru"
                    ? "border-white bg-white/20 scale-110"
                    : "border-transparent hover:bg-white/10 hover:scale-105"
                }`}
              >
                <RU className="w-6 h-6 rounded-full" />
              </button>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <IconButton
            aria-label="Toggle Navigation"
            variant="text"
            className="ml-auto h-8 w-8 text-white hover:text-gray-400 lg:hidden transition-colors duration-200"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* Mobile Menu */}
        <Collapse open={openNav}>
          <div className="mt-4 rounded-md bg-black/95 border-t border-gray-700 shadow-inner p-4">
            <NavList />

            {/* Mobile Dark Mode + Language Switcher */}
            <div className="flex items-center justify-between mt-4 lg:hidden">
              
              {/* Dark Mode */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                {isDark ? (
                  <SunIcon className="h-6 w-6 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-gray-300" />
                )}
              </button>

              {/* Language Switch */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`p-[6px] rounded-full border transition-all duration-300 ${
                    currentLang === "en"
                      ? "border-white bg-white/20 scale-110"
                      : "border-transparent hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <GB className="w-6 h-6 rounded-full" />
                </button>

                <button
                  onClick={() => changeLanguage("ru")}
                  className={`p-[6px] rounded-full border transition-all duration-300 ${
                    currentLang === "ru"
                      ? "border-white bg-white/20 scale-110"
                      : "border-transparent hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <RU className="w-6 h-6 rounded-full" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-col mt-4 gap-3">
              <button className="px-4 py-2 border border-white/30 text-white/80 rounded-md hover:bg-white hover:text-black transition-all duration-300">
                Sign In
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition-all duration-300">
                Join
              </button>
            </div> */}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
