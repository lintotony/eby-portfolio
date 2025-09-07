import CertificationCard from "../components/CertificationCard";
import { certifications } from "../data";
import SectionTitlePage from "./SectionTitlePage";
import ShowMoreWrapper from "../components/ShowMoreWrapper";

export default function Certifications() {
  return (
    <>
      <SectionTitlePage
        id="certifications"
        title="Certifications"
        subTitle="Courses & Certifications"
      />

      <ShowMoreWrapper items={certifications} maxItems={4}>
        {(visibleCertifications) => (
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-[2rem] py-[2rem] lg:px-[3rem] lg:py-[3rem] relative z-7">
            {visibleCertifications?.map((certification, index) => (
              <CertificationCard key={index} {...certification} />
            ))}
          </div>
        )}
      </ShowMoreWrapper>
    </>
  );
}
