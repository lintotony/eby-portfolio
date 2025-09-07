import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import classNames from "classnames";
import HeroImage from "../assets/photos/Hero.jpg";

type CursorVariant = "default" | "image" | "shrink" | "grow";

function CustomCursor() {
  // State to determine whether to show the custom cursor (only on devices with a fine pointer like a mouse)
  const [showCursor, setShowCursor] = useState<boolean>(false);
  // State to determine which type of animation needed for cursor
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  // Raw mouse coordinates tracked with Framer Motion's useMotionValue
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth animation using spring physics for natural movement
  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  // Detects if the user's input device is a fine pointer (e.g., mouse)
  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(isFinePointer);
  }, []);

  // Tracks the mouse movement and updates the motion values accordingly
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset the cursor slightly to center the custom element around the real cursor
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Handle hover detection based on class
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".cursor-show-image")) {
        setCursorVariant("image");
      }
      else if (target.closest(".cursor-shrink-target")) {
        setCursorVariant("shrink");
      } else if (target.closest(".cursor-grow-target")) {
        setCursorVariant("grow");
      } else {
        setCursorVariant("default");
      }
    };

    const handleMouseOut = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (!showCursor) return null;

  // Only render the custom cursor if the user has a fine pointer (like a mouse)
  return showCursor ? (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        backgroundImage:
          cursorVariant === "image" ? `url(${HeroImage})` : "none",
      }}
      className={classNames(
        "fixed top-0 left-0 z-100 bg-accent pointer-events-none transition-all duration-200 ease-out",
        {
          ["size-[40px]"]: cursorVariant === "default",
          ["size-[150px] mix-blend-multiply"]: cursorVariant === "grow",
          ["size-0"]: cursorVariant === "shrink",
          ["rounded-[50%]"]: cursorVariant !== "image",
          [`w-[12rem] h-[12rem] rounded-[200px] bg-cover bg-center`]:
            cursorVariant === "image",
        }
      )}
    ></motion.div>
  ) : null;
}

export default CustomCursor;
