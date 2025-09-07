import React, { useRef } from "react";
import classNames from "classnames";
import TranslateY from "../animations/TranslateY";

type Props = {
  /**Label for the nav item */
  label: React.ReactNode;

  /**Whetther its interactice or not */
  interactive?: boolean;

  /**Is active or not */
  isActive?: boolean;

  /** Path to route */
  path: string;

  /** onClick handler */
  onClick?: () => void;

  /**Classname for the navitem */
  className?: string;
};

function NavItem(props: Props) {
  const {
    label,
    interactive = true,
    isActive,
    className,
    path,
    onClick,
  } = props;
  const activeEl = useRef<HTMLLIElement>(null);
  return (
    <TranslateY className="lg:overflow-visible">
      <li
        className={classNames(
          className,
          "cursor-pointer lg:text-body lg:font-medium overflow-hidden transition-all duration-[300ms] ease-in-out text-title-sm font-medium cursor-shrink-target"
        )}
        ref={activeEl}
      >
        <a
          href={`#${path}`}
          onClick={onClick}
          className={classNames(
            "inline-block relative transition-all duration-[200ms] ease-in-out text-secondary hover:translate-y-[-110%] hover:text-accent",
            {
              ["text-accent"]: isActive,
              ["hover:translate-none"]: !interactive,
            }
          )}
        >
          {label}
          {interactive && (
            <div className="flex absolute top-[110%] left-[0]">{label}</div>
          )}
        </a>
      </li>
    </TranslateY>
  );
}

export default NavItem;
