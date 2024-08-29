"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const h1Ref = useRef(null);
  const spanRef = useRef(null);
  const pRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function () {
        gsap.set(h1Ref.current, { xPercent: -200, opacity: 0 });
        gsap.set(spanRef.current, { opacity: 0 });
        gsap.set(pRef.current, { xPercent: 200, opacity: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        });

        timeline
          .to(bgRef.current, { height: "100%", duration: 2, ease: "power2.out" }, "-=1")
          .to(h1Ref.current, { xPercent: 0, opacity: 1, duration: 2 }, "-=0.5")
          .to(pRef.current, { xPercent: 0, opacity: 1, duration: 2 })
          .to(spanRef.current, { opacity: 1, duration: 3 }, "-=2");
      },

      "(max-width: 1023px)": function () {
        gsap.set(bgRef.current, {
          width: "0%",
          height: "100%",
          transformOrigin: "left center",
          top: "50%",
          left: "0%",
          xPercent: 0,
          yPercent: -50,
          backgroundPosition: "center center",
        });

        gsap.set(h1Ref.current, { xPercent: -100, opacity: 0 });
        gsap.set(spanRef.current, { opacity: 0 });
        gsap.set(pRef.current, { xPercent: 100, opacity: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
          },
        });

        timeline
          .to(bgRef.current, { width: "100%", duration: 2, ease: "power2.out" })
          .to(h1Ref.current, { xPercent: 0, opacity: 1, duration: 1.5 }, "-=1")
          .to(pRef.current, { xPercent: 0, opacity: 1, duration: 1.5 })
          .to(spanRef.current, { opacity: 1, duration: 2 }, "-=1.5");
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-no-repeat bg-center text-custom-white relative pb-14 overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute w-full h-full bg-cover"
        style={{ backgroundImage: "url(/asset/hero-background.png)" }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-8 sm:pl-[50px] sm:pr-[50px] sm:pb-16 md:px-[80px] lg:px-[100px] md:pb-32 flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="flex flex-col xl:max-w-full">
          <h1
            ref={h1Ref}
            className="text-[32px] sm:text-xxl4 md:text-[64px] lg:text-[80px] xl:text-[90px] max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-full text-left leading-tight sm:leading-snug md:leading-[121.02px]"
          >
            Unveiling <span ref={spanRef} className="font-play-fair italic">Timeless Elegance</span>
            <br />
            in Every Space
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[25rem] mt-4 md:mt-0">
          <p
            ref={pRef}
            className="text-sm sm:text-base md:text-base leading-relaxed text-left"
          >
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
