import SectionTitlePage from "./SectionTitlePage";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data";
import ShowMoreWrapper from "../components/ShowMoreWrapper";

export default function Blogs() {
  return (
    <section id="blogs" className="section">
      <SectionTitlePage id="blogs" title="Blogs" subTitle="Articles & Blogs" />
      <ShowMoreWrapper items={blogs} maxItems={4}>
        {(visibleBlogs) => (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-[2rem] py-[2rem] lg:px-[3rem] lg:py-[3rem] relative z-7">
            {visibleBlogs?.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        )}
      </ShowMoreWrapper>
    </section>
  );
}
