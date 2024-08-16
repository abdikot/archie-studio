"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);
  const h1Ref = useRef(null);
  const spanRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.set(leftBgRef.current, {xPercent: -100});
    gsap.set(h1Ref.current, {xPercent: -200, opacity: 0})
    gsap.set(spanRef.current, {opacity: 0})
    gsap.set(rightBgRef.current, {xPercent: 100});
    gsap.set(pRef.current, {xPercent: 200, opacity: 0})

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger:sectionRef.current,
        start: "top center"
      },
    })
    timeline.to(leftBgRef.current, {xPercent: 0, duration: 1})
    timeline.to(rightBgRef.current, {xPercent: 0, duration: 1}, "<")
    timeline.to(h1Ref.current, {xPercent: 0, opacity: 1, duration: 2})
    timeline.to(pRef.current, {xPercent: 0, opacity: 1, duration: 2}, "-=0.5")
    timeline.to(spanRef.current, {opacity: 1, duration: 3}, "-=0.5")
  },[])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-no-repeat bg-center text-custom-white relative pb-14 overflow-hidden"
    >
      <div ref={leftBgRef} className="absolute top-0 left-0 w-1/2 h-full bg-cover" style={{backgroundImage: "url(/asset/hero-background.png)",  backgroundPosition: "left center"}}></div>
      <div ref={rightBgRef} className="absolute top-0 right-0 w-1/2 h-full bg-cover" style={{backgroundImage: "url(/asset/hero-background.png)", backgroundPosition: "right center"}}></div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-8 sm:pl-[50px] sm:pr-[50px] sm:pb-16 md:px-[80px] lg:px-[100px] md:pb-32 flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="flex flex-col xl:max-w-full">
          <h1 ref={h1Ref} className="text-[32px] sm:text-xxl4 md:text-[64px] lg:text-[80px] xl:text-[90px] max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-full text-left leading-tight sm:leading-snug md:leading-[121.02px]">
            Unveiling <span ref={spanRef} className="font-play-fair italic">Timeless Elegance</span>
            <br />
            in Every Space
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[25rem] mt-4 md:mt-0">
          <p ref={pRef} className="text-sm sm:text-base md:text-base leading-relaxed text-left">
            Where design meets innovation, and spaces come alive with creativity.
            As architects and interior designers based in the vibrant heart of
            Indonesia, we bring forth a fusion of cultural richness and
            contemporary finesse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
