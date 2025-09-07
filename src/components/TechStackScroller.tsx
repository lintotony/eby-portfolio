import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiKeras,
  SiJupyter,
  SiFastapi,
  SiLangchain,
  SiOpencv,
  SiPlotly,
  SiStreamlit,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiGooglecolab,
} from "react-icons/si";

function TechStackScroller() {
  const icons = [
    { Icon: SiPython, color: "#3776AB" },
    { Icon: SiPytorch, color: "#EE4C2C" },
    { Icon: SiTensorflow, color: "#FF6F00" },
    { Icon: SiScikitlearn, color: "#F7931E" },
    { Icon: SiNumpy, color: "#013243" },
    { Icon: SiPandas, color: "#150458" },
    { Icon: SiKeras, color: "#D00000" },
    { Icon: SiJupyter, color: "#F37626" },
    { Icon: SiFastapi, color: "#009688" },
    { Icon: SiLangchain, color: "#0FA958" },
    { Icon: SiOpencv, color: "#5C3EE8" },
    { Icon: SiPlotly, color: "#3F4F75" },
    { Icon: SiStreamlit, color: "#FF4B4B" },
    { Icon: SiDocker, color: "#2496ED" },
    { Icon: SiGit, color: "#F1502F" },
    { Icon: SiGithub, color: "white" },
    { Icon: SiLinux, color: "#FCC624" },
    { Icon: SiGooglecolab, color: "#F9AB00" },
  ];

  const repeatedIcons = Array(2).fill(icons).flat();
  return (
    <div className="w-screen py-[2rem] relative overflow-hidden">
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right,
            rgba(13, 27, 42, 1) 0%,     /* --color-primary solid */
            rgba(13, 27, 42, 0.7) 20%,  /* fade */
            rgba(13, 27, 42, 0) 25%,    /* fully transparent */
            rgba(13, 27, 42, 0) 75%,    /* fully transparent */
            rgba(13, 27, 42, 0.7) 80%,  /* fade back */
            rgba(13, 27, 42, 1) 100%    /* solid again */
          )`,
        }}
      />
      <div className="flex items-center w-max gap-[2rem] overflow-visible lg:gap-[3rem] animate-scroll">
        {repeatedIcons.map(({ Icon, color }, index) => (
          <span key={index}>
            <Icon
              color={color}
              className="text-sub-header-sm lg:text-sub-header-lg"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStackScroller;
