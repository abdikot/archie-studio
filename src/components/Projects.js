"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Project = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRefs = useRef([]);

  imgRefs.current = [];

  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  const data = [
    ["/asset/project-1.png", "/asset/project-4.png", "/asset/project-7.png", "/asset/project-10.png"],
    ["/asset/project-2.png", "/asset/project-5.png", "/asset/project-8.png", "/asset/project-11.png"],
    ["/asset/project-3.png", "/asset/project-6.png", "/asset/project-9.png", "/asset/project-12.png"]
  ]

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(textRef.current, { y: 0 });

      imgRefs.current.forEach((img, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        gsap.set(img, { opacity: 0, x: direction });

        gsap.to(img, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
          delay: index * 0.2,
        });
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: textRef.current,
          pinSpacing: false,
          scrub: true,
        }
      });

      gsap.to(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: buttonRef.current,
          pinSpacing: false,
          scrub: true,
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      imgRefs.current.forEach((img, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        gsap.set(img, { opacity: 0, x: direction });

        gsap.to(img, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
          delay: index * 0.2,
        });
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-auto py-10 md:py-0 overflow-hidden">
      <div className="h-auto md:min-h-screen text-custom-gray flex flex-col items-center justify-between py-24 md:py-32">
        <p className="text-center text-xl md:text-2xl leading-[29.05px]">
          Our Project
        </p>

        <h1
          ref={textRef}
          className="mt-10 md:mt-[150px] text-center text-xxl4 md:text-xxl10 px-4 lg:px-[350px] xl:px-[350px] z-10 relative"
        >
          <div className="inline-block bg-white bg-opacity-40 rounded-full px-4 py-2">
            Discover the Canvas of 
            <span className="font-play-fair italic"> Our Creativity</span>
          </div>
        </h1>

        <button
          ref={buttonRef}
          className="bg-transparent h-[40px] w-[180px] md:h-[57px] md:w-[256px] border-custom-gray border-[1px] rounded-full text-base md:text-2xl mt-8 z-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white bg-opacity-40 rounded-full flex items-center justify-center">
            See all projects
          </div>
        </button>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-[50px] lg:px-[100px] mt-10 md:mt-0">
        {data.map((group, i) => (
          <div
            key={i}
            className={`flex flex-col w-full md:w-1/3 ${i === 1 ? 'mt-10 md:mt-12 lg:mt-[248px]' : i === 2 ? 'mt-10 md:mt-0 lg:mt-32' : ''} ${i !== 2 ? 'md:mr-[30px] lg:mr-[60px] xl:mr-[100px]' : ''}`}
          >
            {group.map((src, j) => (
              <div
                key={j}
                ref={addToImgRefs}
                className={`${j !== 0 ? 'mt-8 md:mt-32' : ''}`}
              >
                <img
                  src={src}
                  className="w-full h-[300px] md:h-[450px] object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
