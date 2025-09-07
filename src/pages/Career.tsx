import { useRef } from "react";
import SectionTitlePage from "./SectionTitlePage";
import { experienceData } from "../data";
import ExperienceCard from "../components/ExperienceCard";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TechStackScroller from "../components/TechStackScroller";

function Career() {
  const dividerRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start 0.8", "0.8 0.7"],
  });

  const dividerHeight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const smoothHeight = useSpring(dividerHeight, {
    stiffness: 50,
    damping: 20,
  });

  const heightPercentage = useTransform(smoothHeight, (val) => `${val}%`);

  return (
    <>
      <SectionTitlePage
        id="career"
        title="Career"
        subTitle="Experience"
      />
      <section className="bg-primary px-[2rem] py-[3rem] flex flex-col gap-[3rem] items-center justify-between lg:px-[5rem]">
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-0 flex flex-col items-center lg:left-[50%] ">
            <motion.span
              ref={dividerRef}
              className="block w-[2px] bg-secondary"
              style={{ height: heightPercentage }}
            ></motion.span>
            <span className="block w-[1rem] h-[1rem] rounded-[50%] bg-accent"></span>
          </div>
          <div className="flex flex-col gap-[2rem] ml-[1.5rem]">
            {experienceData.map((experience, index) => {
              return (
                <ExperienceCard
                  key={index}
                  description={experience.description}
                  jobTitle={experience.jobTitle}
                  joiningYear={experience.joiningYear}
                  leavingYear={experience.leavingYear}
                  organization={experience.organization}
                />
              );
            })}
          </div>
        </div>
        <TechStackScroller />
      </section>
    </>
  );
}

export default Career;
