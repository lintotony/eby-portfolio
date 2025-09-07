import React from "react";
import { motion } from "framer-motion";

type Props = {
  /** Children inside the animation */
  children?: React.ReactNode;

  /** Direction of extend */
  direction: "top" | "right" | "bottom" | "left";
};

function Extend({ children, direction }: Props) {
  const isHorizontal = direction === "left" || direction === "right";

  // Define origin values based on direction
  const origin = {
    originX: direction === "left" ? 1 : direction === "right" ? 0 : 0.5,
    originY: direction === "top" ? 1 : direction === "bottom" ? 0 : 0.5,
  };

  return (
    <div className="relative flex items-center justify-center flex-1">
      <motion.div
        variants={{
          hidden: {
            [isHorizontal ? "scaleX" : "scaleY"]: 0,
            ...origin,
          },
          visible: {
            [isHorizontal ? "scaleX" : "scaleY"]: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Extend;
