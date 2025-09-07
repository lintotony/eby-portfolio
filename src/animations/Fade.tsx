import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function Fade(props: Props) {
  const { children } = props;

  return (
    <div className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Fade;
