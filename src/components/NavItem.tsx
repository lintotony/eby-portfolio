import React from "react";
import classNames from "classnames";
import TranslateY from "../animations/TranslateY";

type Props = {
  label: React.ReactNode;
  path: string;
  isActive?: boolean;
  closeMenu?: () => void;
  className?: string;
};

function NavItem({ label, path, isActive, closeMenu, className }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetEl = document.getElementById(path);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    closeMenu?.();
  };

  return (
    <TranslateY>
      <li
        className={classNames(
          className,
          "cursor-pointer lg:text-body lg:font-medium text-title-sm font-medium overflow-hidden transition-all duration-300 ease-in-out"
        )}
      >
        <a
          href={`#${path}`}
          onClick={handleClick}
          className={classNames(
            "inline-block relative transition-all duration-200 ease-in-out text-secondary hover:text-accent",
            { "text-accent": isActive }
          )}
        >
          {label}
        </a>
      </li>
    </TranslateY>
  );
}

export default NavItem;
