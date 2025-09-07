import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  /**Button label */
  label: React.ReactNode;

  /**Link to redirect */
  link?: string;

  /**target for anchor tag */
  target?: "_self" | "_blank";

  /**Classname for button */
  className?: string;

  /**Inverted color scheme with button style*/
  buttonStyle?: "default" | "contrast";

  /**Disabled button or not */
  disabled?: boolean;

  /**On click handler */
  onClick?: () => void;
};
function Button(props: Props) {
  const { label, link, target, buttonStyle, className, disabled, onClick } =
    props;
  return (
    <a href={link} target={target}>
      <button
        className={twMerge(
          classNames(
            "cursor-shrink-target px-[2rem] py-[0.75rem] rounded-[50px] bg-accent text-primary text-body font-primary cursor-pointer font-medium hover:bg-transparent border-[2px] border-transparent hover:border-accent hover:text-accent transition-all duration-[300ms] ease-in-out lg:text-small",
            className,
            {
              ["bg-primary text-secondary hover:border-primary hover:text-primary"]:
                buttonStyle === "contrast",
              ["opacity-[0.7] pointer-events-none"]: disabled,
            }
          )
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </a>
  );
}

export default Button;
