import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  /**Name of the media */
  socialName: string;

  /**Link to media */
  link: string;
};

function SocialLink(props: Props) {
  const { socialName, link } = props;
  return (
    <div>
      <a href={link} target="_blank" className="flex items-center font-primary font-semibold text-secondary text-content-lg hover:text-accent transition-all duration-[300ms] ease-in-out cursor-shrink-target">
        {socialName}
        <FiArrowUpRight className="lg:hidden" />
      </a>
    </div>
  );
}

export default SocialLink;
