import TranslateY from "../animations/TranslateY";

type Props = {
  /**Designation of the job */
  jobTitle: string;

  /**Worked Organization */
  organization: string;

  /**Joined year */
  joiningYear: string;

  /**Left year */
  leavingYear?: string;

  /**Description of the role */
  description: string[];
};

function ExperienceCard(props: Props) {
  const { description, jobTitle, joiningYear, organization, leavingYear } =
    props;
  return (
    <div className="flex flex-col gap-[1rem] lg:flex-row lg:justify-between">
      <div className="w-full lg:w-[40%] flex flex-col gap-[1rem]">
        <TranslateY className="overflow-visible">
          <h1 className="font-primary text-secondary text-sub-header-sm font-semibold leading-[calc(1.3_*_var(--text-sub-header-sm))] lg:text-sub-header-lg lg:leading-[calc(1.2_*_var(--text-sub-header-lg))]">
            {jobTitle}
          </h1>
        </TranslateY>
        <div className="font-primary text-body text-accent font-semibold lg:flex lg:items-center lg:justify-between lg:gap-2">
          <TranslateY className="overflow-visible">
            <h6>{organization}</h6>
          </TranslateY>
          <TranslateY className="overflow-visible">
            <h6>
              {joiningYear} - {leavingYear || "Present"}
            </h6>
          </TranslateY>
        </div>
      </div>
      <ul className="font-primary text-secondary text-small leading-[calc(1.5_*_var(--text-small))] w-full lg:w-[40%] lg:text-body lg:leading-[calc(1.5_*_var(--text-body))] list-disc list-outside marker:text-accent pl-5">
        {description?.map((item) => (
          <TranslateY className="overflow-visible" key={item}>
            <li>{item}</li>
          </TranslateY>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
