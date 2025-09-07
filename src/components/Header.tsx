import { useState } from "react";
import Logo from "../assets/favicon.svg";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuClicked((prev) => !prev);
  };

  const closeMenu = () => setIsMenuClicked(false);

  const navItems = [
    { label: "Home", path: "home" },
    { label: "About", path: "about" },
    { label: "Career", path: "career" },
    { label: "Projects", path: "projects" },
    { label: "Certifications", path: "certifications" },
    { label: "Blogs", path: "blogs" },
    { label: "Contact", path: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary w-full flex items-center justify-center lg:h-[10vh]">
      <nav className="w-full flex items-center justify-between px-4 py-4">
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-[var(--text-sub-header-lg)] lg:hidden"
          />
        </a>

        <ul
          className={`flex flex-col gap-6 absolute top-0 left-0 w-full h-screen bg-primary pl-8 justify-center transition-all duration-300 ease-in-out ${
            isMenuClicked
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } lg:flex-row lg:relative lg:h-full lg:translate-y-0 lg:opacity-100 lg:gap-8 lg:pl-0`}
        >
          {navItems?.map((item) => (
            <NavItem
              key={item.path}
              label={item.label}
              path={item.path}
              closeMenu={closeMenu}
            />
          ))}
        </ul>

        <Hamburger isClicked={isMenuClicked} onClick={handleMenuIconClick} />
      </nav>
    </header>
  );
}

export default Header;
