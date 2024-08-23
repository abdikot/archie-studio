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

    gsap.set(textRef.current,{ x: "100%", },)
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
      }
    );
  }, {scope: sectionRef});

  return (
    <section ref={sectionRef} className="relative min-h-screen text-custom-gray flex flex-col py-10 sm:py-64 overflow-hidden">
      <div className="flex flex-col md:flex-row px-4 md:px-[100px] justify-between items-start">
        <h1 className="text-3xl sm:text-5xl md:text-[64px] max-w-full md:max-w-auto leading-[129.05px]">
          Ready to transform your space?
        </h1>
        <button className="h-10 md:h-[57px] mt-4 md:mt-0">
          <img src="/icons/button-contact.svg" alt="Contact Button" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-[100px] pb-10 sm:pb-20 md:pb-64 flex items-center justify-center overflow-hidden">
        <h1
          ref={textRef}
          className="whitespace-nowrap transform translate-x-full text-4xl sm:text-5xl md:text-6xl lg:text-[150px] leading-tight md:leading-[100px] w-full text-center md:text-left"
        >
          Let's Create <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;
