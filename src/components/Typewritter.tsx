import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // typing speed per character
  pause?: number; // pause before deleting
};

function Typewriter({ text, speed = 100, pause = 1500 }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < text.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && index > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed);
    } else if (isDeleting && index === 0) {
      // Start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, pause]);

  return (
    <div className="flex items-center justify-center h-full w-full text-center">
      <span>
        {displayed}
        <span className="animate-pulse [animation-delay:0.5s]">|</span>
      </span>
    </div>
  );
}

export default Typewriter;
