import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

interface ShowMoreWrapperProps<T> {
  items: T[];
  maxItems?: number;
  children: (visibleItems: T[]) => React.ReactNode;
}

function ShowMoreWrapper<T>({
  items,
  maxItems = 6,
  children,
}: ShowMoreWrapperProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const prevShowAll = useRef(showAll); // track previous state

  const visibleItems = showAll ? items : items.slice(0, maxItems);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  useEffect(() => {
    if (prevShowAll.current && !showAll) {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    prevShowAll.current = showAll;
  }, [showAll]);

  return (
    <div className="flex flex-col gap-2">
      {children(visibleItems)}

      {items.length > maxItems && (
        <div className="flex justify-center pb-10" ref={buttonRef}>
          <Button
            onClick={handleToggle}
            label={showAll ? "Show Less" : "Show More"}
          />
        </div>
      )}
    </div>
  );
}

export default ShowMoreWrapper;
