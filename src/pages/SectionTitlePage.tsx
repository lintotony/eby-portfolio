import classNames from "classnames";
import { FiArrowDown } from "react-icons/fi";
import TranslateY from "../animations/TranslateY";
import Extend from "../animations/Extend";
import Fade from "../animations/Fade";

type Props = {
  /**Id of each section*/
  id: string;

  /**Classname for the section */
  className?: string;

  /**Section title */
  title: string;

  /**secondary text */
  subTitle?: string;
};
function SectionTitlePage(props: Props) {
  const { id, className, title, subTitle } = props;
  return (
    <section
      id={id}
      className={classNames(
        "w-full h-[max(50vh,20rem)] bg-secondary lg:h-[90vh] flex items-center justify-center py-[2rem] border-t-[5px] border-accent lg:p-[2rem]",
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full lg:rounded-[20px] border-y border-primary lg:border">
        <div className="flex flex-col items-center justify-center">
          <TranslateY>
            <h1 className="text-title-sm text-primary font-primary font-semibold leading-20 lg:text-[min(25vh,var(--text-title-lg))] lg:leading-[calc(1.2_*_min(25vh,_var(--text-title-lg)))] cursor-grow-target">
              {title}
            </h1>
          </TranslateY>
          <div className="w-full flex items-center gap-[0.5rem]">
            <Extend direction="left">
              <span className="block w-full h-[1px] bg-primary"></span>
            </Extend>
            <Fade>
              <span className="block font-secondary text-primary italic text-content-sm sm:text-content-md lg:text-content-lg">
                {subTitle}
              </span>
            </Fade>
            <Extend direction="right">
              <span className="block w-full h-[1px] bg-primary"></span>
            </Extend>
          </div>
          <div className="absolute bottom-0 translate-y-[50%] bg-secondary p-[0.25rem]">
            <FiArrowDown className="w-full h-full p-[0.5rem] rounded-[50%] border border-primary text-accent animate-bounce [animation-duration:2s]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTitlePage;
