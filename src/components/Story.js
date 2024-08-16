"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const Story = () => {
  const textRef = useRef(null)
  
  useEffect(() => {
    const textElement = textRef.current;
    const words = textElement.textContent.split(" ");
    textElement.innerHTML = words.map((word) => `<span>${word} </span>`).join("");
    const spans = textElement.querySelectorAll("span")

    gsap.set(spans, {opacity: 0, y:20})
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 70%",
        scrub: true
      }
    })

  },[])
  return (
    <section className="h-screen flex text-custom-gray flex-col items-center justify-center md:justify-start pt-28 md:pt-[200px]">
      <p className="text-center text-xl md:text-2xl leading-[29.05px]">
        Our Story
      </p>

      <p ref={textRef} className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-[77.54px] pt-10 md:pt-32 px-6 sm:px-20 md:px-[100px] lg:px-[300px] xl:px-[451px]">
        We don't just design spaces, we weave narratives. Established in 2009,
        our journey in the world of architecture and interior design has been a
        tale of passion, innovation, and transformative creativity.
      </p>
    </section>
  );
};

export default Story;
