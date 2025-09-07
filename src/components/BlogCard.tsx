import Button from "./Button";

// components/BlogCard.tsx
type Props = {
  title: string;
  description: string;
  link: string;
};

export default function BlogCard({ title, description, link }: Props) {
  return (
    <div className="blog-item flex flex-col gap-2 justify-between bg-secondary rounded-lg p-4 hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:-translate-y-1">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-2">
        <Button
          label={<span className="text-sm">Read Article</span>}
          link={link}
          target="_blank"
          buttonStyle="default"
        />
      </div>
    </div>
  );
}
