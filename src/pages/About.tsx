import { useState, useEffect } from "react";
import SectionTitlePage from "./SectionTitlePage";
import Button from "../components/Button";
import AboutImage1 from "../assets/photos/About.jpg";
import AboutImage2 from "../assets/photos/About2.jpeg";
import AboutImage3 from "../assets/photos/About3.jpeg";
import { resume } from "../data";
import TranslateY from "../animations/TranslateY";
import Fade from "../animations/Fade";

function About() {
  const images = [AboutImage1, AboutImage2, AboutImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <SectionTitlePage id="about" title="About Me" subTitle="The Journey" />
      <section className="bg-primary px-[2rem] py-[2rem] flex flex-col items-center lg:px-[5rem] gap-[2rem] justify-between lg:py-[3rem] lg:items-start">
        <div className="flex flex-col items-center gap-[1.5rem]">
          <TranslateY>
            <div className="relative rounded-[20px] overflow-hidden w-80 h-96">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`About ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </TranslateY>
          <div className="flex flex-col items-center">
            <div className="font-primary text-secondary text-center leading-[calc(1.5_*_var(--text-body))] lg:w-[60%]">
              <TranslateY>
                <p>
                  I'm a data scientist and AI engineer in my final semester at
                  the University of Melbourne. Most of my week is split between
                  uni work and tinkering with projects that probably keep me up
                  later than they should.
                </p>
                <br />
                <p>
                  What really keeps me going is consistency and discipline.
                  Those two are tough to stick with, but they're also the reason
                  I get things done. Whether it's digging into data,
                  experimenting with agentic AI workflows, or pushing the limits
                  of LLMs, I try to build a little bit every day. Visualization
                  is another space I enjoy, there's something satisfying about
                  making complex stuff instantly click for people.
                </p>
                <br />
                <p>
                  Outside of the "serious" work, I'm usually cooking, planning
                  my next trip, or just hanging out around Melbourne with
                  friends (preferably with a good coffee in hand). I'm a big dog
                  person too, so if you see me stop mid-sentence because a
                  golden retriever walked by, fair warning. On weekends, my idea
                  of fun is a late-night coding session. I keep my learning
                  experiments and materials open on GitHub so others can build
                  on them, and I write the occasional blog on Medium when I
                  think something deserves a longer story. It's my way of giving
                  back to the same community that helped me learn in the first
                  place.
                </p>
              </TranslateY>
            </div>
            <br />
            <Fade>
              <Button label="Download CV" link={resume} target="_blank" />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
