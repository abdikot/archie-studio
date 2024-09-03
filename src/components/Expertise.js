"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
}

const Expertise = () => {
  const [expertises, setExpertises] = useState([]);
  const sectionRef = useRef(null);
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);
  const h1LeftRef = useRef(null);
  const pLeftRef = useRef(null);
  const h1RightRef = useRef(null);
  const pRightRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStrapiData("/api/expertises");
      setExpertises(data.data);
    };
    fetchData();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(leftBgRef.current, { xPercent: -100 });
      gsap.set(h1LeftRef.current, { xPercent: -200, opacity: 0 });
      gsap.set(pLeftRef.current, { opacity: 0 });
      gsap.set(rightBgRef.current, { xPercent: 100 });
      gsap.set(h1RightRef.current, { xPercent: 200, opacity: 0 });
      gsap.set(pRightRef.current, { opacity: 0 });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      tl1.to(leftBgRef.current, { xPercent: 0, duration: 1 });
      tl1.to(rightBgRef.current, { xPercent: 0, duration: 1 });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          pin: true,
          scrub: true,
          end: "+=4000",
        },
      });

      tl2.to(h1LeftRef.current, { xPercent: 0, opacity: 1, duration: 1 });
      tl2.to(h1RightRef.current, { xPercent: 0, opacity: 1, duration: 1 }, "+=0.5");
      tl2.to(pLeftRef.current, { opacity: 1, duration: 1 });
      tl2.to(pRightRef.current, { opacity: 1, duration: 1 }, "-=0.5");
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(leftBgRef.current, { xPercent: 0 });
      gsap.set(rightBgRef.current, { xPercent: 0 });
      gsap.set(h1LeftRef.current, { xPercent: -100, opacity: 0 });
      gsap.set(pLeftRef.current, { opacity: 0 });
      gsap.set(h1RightRef.current, { xPercent: 100, opacity: 0 });
      gsap.set(pRightRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          pin: true,
          toggleActions: "restart complete restart complete",
        },
      });

      tl.to(h1LeftRef.current, { xPercent: 0, opacity: 1, duration: 1 });
      tl.to(h1RightRef.current, { xPercent: 0, opacity: 1, duration: 1 }, "+=0.5");
      tl.to(pLeftRef.current, { opacity: 1, duration: 1 });
      tl.to(pRightRef.current, { opacity: 1, duration: 1 }, "-=0.5");
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="h-auto md:min-h-screen flex flex-col justify-between pt-24 px-6 sm:px-10 md:px-0 md:pt-32 overflow-hidden"
    >
      <p className="text-center text-custom-gray mb-16 text-xl md:text-2xl leading-[29.05px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[801px] relative text-custom-white">
        {expertises.length > 0 && (
          <>
            <div className="relative w-full md:w-1/2 h-80 md:h-full">
              <img
                ref={leftBgRef}
                src="/asset/expertise-architecture.png"
                className="w-full h-full object-cover bg-no-repeat"
                alt="Architectural Expertise"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
                <h1
                  ref={h1LeftRef}
                  className="text-xxl4 sm:text-xxl4 md:text-[60px] lg:text-[80px] xl:text-xxl10"
                >
                  {expertises[0]?.attributes?.title}
                </h1>
                <p
                  ref={pLeftRef}
                  className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-8 lg:pt-12 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]"
                >
                  {expertises[0]?.attributes?.description}
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-80 md:h-full mt-6 md:mt-0">
              <img
                ref={rightBgRef}
                src="/asset/expertise-interior.png"
                className="w-full h-full object-cover"
                alt="Interior Design Expertise"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
                <h1
                  ref={h1RightRef}
                  className="text-xxl4 sm:text-xxl4 md:text-[60px] md:text-center lg:text-[80px] xl:text-xxl10"
                >
                  {expertises[1]?.attributes?.title}
                </h1>
                <p
                  ref={pRightRef}
                  className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-8 lg:pt-12 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]"
                >
                  {expertises[1]?.attributes?.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Expertise;
