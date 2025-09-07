type Props = {
  title: string;
  description: string;
  year: string;
  link: string;
  logo: string;
  alt: string;
};

export default function CertificationCard({
  title,
  description,
  year,
  link,
  logo,
  alt,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      className="cert-item cert-link flex flex-col justify-between h-full bg-white rounded-lg p-4 gap-2 hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:-translate-y-1"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="cert-logo w-20 h-20 flex items-center justify-center">
          <img
            src={logo}
            alt={alt}
            className="cert-icon w-full h-full object-contain"
          />
        </div>
        <h3 className="font-semibold text-center">{title}</h3>
        <p className="text-center text-sm">{description}</p>
      </div>
      <span className="text-xs font-medium text-accent text-center">
        {year}
      </span>
    </a>
  );
}
