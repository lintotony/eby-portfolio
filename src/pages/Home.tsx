import TranslateY from "../animations/TranslateY";
import Extend from "../animations/Extend";
import Fade from "../animations/Fade";
import Button from "../components/Button";
import { FiArrowDown } from "react-icons/fi";
import Typewriter from "../components/Typewritter";

function Home() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 w-full flex flex-col items-center justify-center h-[100dvh] p-[1rem]"
    >
      <div className="flex flex-col gap-3 items-center">
        <h1 className="font-primary text-title-sm font-semibold text-center text-secondary leading-20 sm:text-title-md sm:leading-30 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.1_*_min(25vh,_var(--text-title-lg)))] cursor-show-image">
          <TranslateY>Hi,</TranslateY>
          <TranslateY>
            I’m <span className="text-accent">Eby Thomas</span>
          </TranslateY>
        </h1>
        <div className="w-full flex gap-[0.5rem] items-center lg:w-[100%]">
          <Extend direction="left">
            <span className="block w-full h-[1px] bg-secondary"></span>
          </Extend>
          <Fade>
            <span className="font-secondary text-secondary italic text-content-sm sm:text-content-md lg:text-content-lg">
              Welcome to my AI & Data Science portfolio!
            </span>
          </Fade>
          <Extend direction="right">
            <span className="block w-full h-[1px] bg-secondary"></span>
          </Extend>
        </div>
        <div className="w-full flex flex-col gap-5 items-center justify-center">
          <div className="w-full flex gap-[0.5rem] items-center justify-center lg:w-[100%]">
            <Fade>
              <span className="font-secondary text-secondary text-content-sm">
                <Typewriter
                  text="You can find my work, thoughts, and ideas here."
                  speed={60}
                />
              </span>
            </Fade>
          </div>
          <Fade>
            <Button
              label={
                <div className="flex gap-[0.5rem] items-center">
                  <span className="text-sm">View Projects</span>
                  <FiArrowDown className="text-content-sm animate-bounce [animation-duration:2s]" />
                </div>
              }
              link="#projects"
            />
          </Fade>
        </div>
      </div>

      <span className="absolute bottom-4 text-body font-primary text-secondary lg:text-small">
        Devfolio of <span className="font-medium">Eby Thomas</span>
      </span>
    </section>
  );
}

export default Home;
