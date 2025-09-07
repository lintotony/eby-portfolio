import classNames from "classnames";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  /** Classname for the button */
  className?: string;

  /**Disabled button or not */
  disabled?: boolean;

  /**Button label */
  label: React.ReactNode;

  /**Onclick handler */
  onClick?: () => void;
};

function ExpandingButton(props: Props) {
  const { className, disabled, label, onClick } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {/* Button */}
      {!isExpanded && (
        <motion.button
          layoutId="expandable"
          layout={false}
          className={twMerge(
            classNames(
              "w-fit min-w-[10rem] px-[2rem] py-[0.75rem] rounded-[50px] bg-primary text-body font-primary cursor-pointer font-medium hover:bg-transparent border-[2px] border-transparent hover:border-primary hover:text-primary transition-all duration-[300ms] ease-in-out lg:text-body",
              "text-secondary",
              className,
              {
                ["pointer-events-none"]: disabled,
              }
            )
          )}
          onClick={() => {
            setIsExpanded(true);
            onClick?.();
          }}
        >
          <div>{label}</div>
        </motion.button>
      )}

      {/* Expanded Fullscreen Element */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId="expandable"
            className="fixed top-0 left-0 w-screen h-screen bg-primary z-50"
            initial={{ borderRadius: 50 }}
            animate={{ borderRadius: 0 }}
            transition={{
              borderRadius: { duration: 1, ease: "easeInOut" },
            }}
            onAnimationComplete={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExpandingButton;
