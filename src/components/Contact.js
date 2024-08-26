"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(textRef.current, { x: "100%" });
      gsap.to(textRef.current, {
        x: "-50%",
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: true,
          pin: true,
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.set(textRef.current, { y: "100%", opacity: 0 });
      gsap.to(textRef.current, {
        y: "0%", 
        opacity: 1,
        duration: 2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom center",
          toggleActions : "restart reverse restart reverse",
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen text-custom-gray flex flex-col py-24 sm:py-64 md:py-24 overflow-hidden">
      <div className="flex flex-col md:flex-row px-4 md:px-[100px] justify-between items-start">
        <h1 className="text-5xl sm:text-5xl md:text-[64px] max-w-full md:max-w-auto leading-relaxed md:leading-[129.05px]">
          Ready to transform your space?
        </h1>
        <button className="h-20 md:h-[57px] mt-4">
          <img src="/icons/button-contact.svg" alt="Contact Button" />
        </button>
      </div>

      <div className="md:absolute md:bottom-0 md:left-0 md:right-0 px-5 sm:px-6 md:px-[100px] py-16 sm:py-20 md:pb-64 flex items-center justify-start overflow-hidden">
        <h1
          ref={textRef}
          className="md:whitespace-nowrap md:transform md:translate-x-full text-6xl lg:text-[150px] leading-normal md:leading-[100px] w-full text-left md:text-left"
        >
          Let's Create <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;
