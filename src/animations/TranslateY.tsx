import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

type Props = {
  /**Children inside animation */
  children: React.ReactNode;

  /**Classname for root element */
  className?: string;
};

function TranslateY(props: Props) {
  const { children, className } = props;
  return (
    <div className={twMerge(classNames("relative overflow-hidden", className))}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default TranslateY;
