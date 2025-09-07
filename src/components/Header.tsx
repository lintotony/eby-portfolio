import { useState } from "react";
import Logo from "../assets/favicon.svg";
import NavItem from "./NavItem";
import Hamburger from "./Hamburger";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const handleMenuIconClick = () => {
    setIsMenuClicked((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuClicked(false);
  };

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
    <header className="z-100 bg-primary w-full flex items-center justify-center lg:h-[10vh] sticky top-0 lg:z-0">
      <nav className="w-full flex items-center px-[1rem] py-[1rem] justify-between">
        <a href="/">
          <img
            src={Logo}
            alt="My Logo"
            className="w-(--text-sub-header-lg) lg:hidden"
          />
        </a>
        <ul
          className={`flex flex-col align-center gap-[1rem] font-primary absolute top-0 left-0 w-full pl-[2rem] bg-primary justify-center transition-all duration-[300ms] ease-in-out h-screen ${
            isMenuClicked
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } lg:relative lg:flex-row lg:h-full lg:translate-y-0 lg:opacity-100`}
        >
          {navItems.map(({ label, path }) => (
            <NavItem
              key={path}
              label={label}
              path={path}
              onClick={handleLinkClick}
            />
          ))}
        </ul>
        <Hamburger isClicked={isMenuClicked} onClick={handleMenuIconClick} />
      </nav>
    </header>
  );
}

export default Header;