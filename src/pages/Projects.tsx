import SectionTitlePage from "./SectionTitlePage";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";
import ShowMoreWrapper from "../components/ShowMoreWrapper";

function Projects() {
  return (
    <>
      <SectionTitlePage
        id="projects"
        title="Projects"
        subTitle="Some Things I've Worked On"
      />
      <section className="bg-primary flex items-center justify-center px-[2rem] py-[2rem] lg:px-[5rem] lg:py-[3rem]">
        <h1 className="text-accent font-primary text-header-sm leading-[calc(1.2_*_var(--text-header-sm))] font-semibold text-center">
          <span className="text-secondary">Hello!</span> Glad to see you here.
          This is a collection of my{" "}
          <span className="text-secondary">personal projects</span> made during
          free time.
        </h1>
      </section>

      <ShowMoreWrapper items={projects} maxItems={6}>
        {(visibleProjects) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-[2rem] py-[2rem] lg:px-[3rem] lg:py-[3rem] relative z-7">
            {visibleProjects?.map((project, index) => (
              <div key={index} className="h-full">
                <ProjectCard
                  bannerImage={project.bannerImage}
                  index={index + 1}
                  projectName={project.projectName}
                  techStack={project.techsUsed}
                  story={project.story}
                  description={project?.description ?? ""}
                  link={project.pathLink}
                  video={project.video}
                />
              </div>
            ))}
          </div>
        )}
      </ShowMoreWrapper>
    </>
  );
}

export default Projects;
