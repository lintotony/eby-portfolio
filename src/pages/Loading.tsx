import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ExpandingButton from "../components/ExpandingButton";
import FullLogo from "../assets/Logo-dark.svg";

type Props = {
  onFinish: () => void;
};

const Circle = () => {
  return (
    <div className="w-[5rem] h-[0.5rem] bg-accent rounded-[1rem] lg:w-[2rem] lg:h-[2rem] lg:rounded-[50%]"></div>
  );
};

function Loading(props: Props) {
  const { onFinish } = props;
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 10);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div className="relative w-screen h-[100dvh] flex flex-col items-center justify-between bg-secondary text-primary p-[2rem]">
      <div className="w-[2rem]">
        <img src={FullLogo} alt="" />
      </div>
      <div className="font-primary text-header-sm font-semibold flex flex-col items-center gap-[1.5rem] lg:flex-row l">
        Code <Circle /> Create <Circle /> Explore
      </div>
      <ExpandingButton
        disabled={progress < 100}
        onClick={() => {
          setTimeout(() => {
            onFinish();
          }, 1000);
        }}
        label={
          progress === 100 ? (
            <span className="flex items-center justify-evenly gap-[0.5rem]">
              Get Started <FiArrowRight />
            </span>
          ) : (
            `${progress}%`
          )
        }
      />
    </div>
  );
}

export default Loading;
