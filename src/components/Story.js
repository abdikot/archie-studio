"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Story = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const textElement = textRef.current;
    const words = textElement.textContent.split(" ");
    textElement.innerHTML = words.map((word) => `<span>${word} </span>`).join("");
    const spans = textElement.querySelectorAll("span");

    gsap.matchMedia().add("(min-width: 1024px)", () => {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      });

      gsap.set(spans, { opacity: 0.25, y: 10 });
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
        },
      });
    });

    gsap.matchMedia().add("(max-width: 1023px)", () => {
      gsap.set(spans, { opacity: 0.25, y: 15 });
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
      });
    });

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex text-custom-gray flex-col items-center justify-center md:justify-start pt-40 md:pt-[150px] overflow-hidden"
    >
      <div ref={containerRef}>
        <p className="text-center text-xl md:text-2xl leading-[29.05px]">
          Our Story
        </p>

        <p
          ref={textRef}
          className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal md:leading-[77.54px] pt-10 md:pt-28 px-6 sm:px-20 md:px-[100px] lg:px-[300px] xl:px-[360px]"
        >
          We don't just design spaces, we weave narratives. Established in 2009,
          our journey in the world of architecture and interior design has been a
          tale of passion, innovation, and transformative creativity.
        </p>
      </div>
    </section>
  );
};

export default Story;
