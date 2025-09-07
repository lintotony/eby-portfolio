import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { formatToTwoDigits } from "../helpers";
import classNames from "classnames";
import { FiArrowUpRight } from "react-icons/fi";
import type { ReactNode } from "react";

type Props = {
  projectName: string;
  story: string;
  description: string;
  techStack: string[];
  bannerImage: string;
  video?: ReactNode;
  link?: string;
  index: number;
};

function ProjectCard(props: Props) {
  const {
    bannerImage,
    video,
    story,
    description,
    index,
    projectName,
    techStack,
    link,
  } = props;

  const updatedIndex = formatToTwoDigits(index);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(
        "w-full h-fit bg-secondary rounded-[1rem] p-[1rem] font-primary flex flex-col items-center gap-6",
        "transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:-translate-y-1"
      )}
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="w-full h-52 rounded-[0.5rem] overflow-hidden">
        <img
          src={bannerImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="w-full relative border-y-[1px] border-primary mt-[1rem] py-[1rem]">
        <p className="absolute top-0 left-0 -translate-y-[50%] text-small font-semibold bg-secondary pr-1">
          {updatedIndex}
        </p>
        <div className="flex gap-[0.5rem] justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col xl:flex-row gap-2 items-center justify-between">
              <h3 className="font-semibold text-content-lg leading-[calc(1.3_*_var(--text-content-lg))]">
                {projectName}
              </h3>
              <div className="flex gap-2">
                {link && (
                  <Button
                    label={
                      <div className="flex gap-[0.5rem] items-center">
                        <span className="text-sm">Code</span>
                        <FiArrowUpRight className="text-content-sm" />
                      </div>
                    }
                    link={link}
                    target="_blank"
                    buttonStyle="contrast"
                  />
                )}
                {video && (
                  <Button
                    label={
                      <div className="flex gap-[0.5rem] items-center">
                        <span className="text-sm">Demo</span>
                      </div>
                    }
                    onClick={() => setIsOpen(true)}
                    buttonStyle="default"
                  />
                )}
              </div>
            </div>
            <div className="italic">"{story}"</div>
            <span className="text-small">{techStack.join(" . ")}</span>
            <div className="text-small">{description}</div>
          </div>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
            <div className="relative w-[90%] max-w-3xl bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-1 text-accent text-xl font-bold z-50 cursor-pointer"
              >
                ✕
              </button>
              <div
                className="project-video p-5 w-full h-fit bg-cover bg-center bg-no-repeat flex items-center justify-center text-white text-5xl font-bold relative"
                dangerouslySetInnerHTML={{ __html: video as string }}
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ProjectCard;
