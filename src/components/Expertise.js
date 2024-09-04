"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
  const bgRefs = useRef([]);
  const h1Refs = useRef([]);
  const pRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStrapiData("/api/expertises?populate=*");
      setExpertises(data.data);
    };
    fetchData();
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      bgRefs.current.forEach((ref, index) => {
        gsap.set(ref, { xPercent: index % 2 === 0 ? -100 : 100 });
      });
      h1Refs.current.forEach((ref, index) => {
        gsap.set(ref, { xPercent: index % 2 === 0 ? -200 : 200, opacity: 0 });
      });
      pRefs.current.forEach((ref) => {
        gsap.set(ref, { opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      bgRefs.current.forEach((ref) => {
        tl.to(ref, { xPercent: 0, duration: 1 });
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          pin: true,
          scrub: true,
          end: "+=4000",
        },
      });

      h1Refs.current.forEach((ref, index) => {
        tl2.to(ref, { xPercent: 0, opacity: 1, duration: 1 }, index * 0.5);
      });
      pRefs.current.forEach((ref, index) => {
        tl2.to(ref, { opacity: 1, duration: 1 }, `-=${0.5 * index}`);
      });
    });

    mm.add("(max-width: 1023px)", () => {
      bgRefs.current.forEach((ref) => {
        gsap.set(ref, { xPercent: 0 });
      });
      h1Refs.current.forEach((ref, index) => {
        gsap.set(ref, { xPercent: index % 2 === 0 ? -100 : 100, opacity: 0 });
      });
      pRefs.current.forEach((ref) => {
        gsap.set(ref, { opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          pin: true,
          toggleActions: "restart complete restart complete",
        },
      });

      h1Refs.current.forEach((ref, index) => {
        tl.to(ref, { xPercent: 0, opacity: 1, duration: 1 }, index * 0.5);
      });
      pRefs.current.forEach((ref, index) => {
        tl.to(ref, { opacity: 1, duration: 1 }, `-=${0.5 * index}`);
      });
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
        {expertises.map((expertise, index) => (
          <div
            key={expertise.id}
            className={`relative w-full md:w-1/2 h-80 md:h-full ${
              index % 2 === 1 ? "mt-6 md:mt-0" : ""
            }`}
          >
            <img
              ref={(el) => (bgRefs.current[index] = el)}
              src={`http://localhost:1337${expertise?.attributes?.image?.data?.attributes?.url}`}
              className="w-full h-full object-cover"
              alt={expertise?.attributes?.title || "Expertise Image"}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
              <h1
                ref={(el) => (h1Refs.current[index] = el)}
                className="text-xxl4 sm:text-xxl4 md:text-[60px] lg:text-[80px] xl:text-xxl10"
              >
                {expertise?.attributes?.title}
              </h1>
              <p
                ref={(el) => (pRefs.current[index] = el)}
                className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-8 lg:pt-12 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]"
              >
                {expertise?.attributes?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
