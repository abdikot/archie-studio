"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 1023px)", () => {
      gsap.set(logoRef.current, { opacity: 0, y: -100 });
      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% bottom",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 2
      });

      gsap.set(contentRef.current, { opacity: 0, x: -100 });
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "90% bottom",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 2
      });

      gsap.set(bottomRef.current, { opacity: 0, y: 100 });
      gsap.to(bottomRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "90% bottom",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 2
      });
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.set(sectionRef.current, { clipPath: "inset(50% 0 50% 0)" });

      gsap.to(sectionRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "+=1000",
          scrub: true,
        }
      });

      gsap.from(logoRef.current, {
        yPercent: 100,
        clipPath: "inset(0% 0% 100% 0%)",
        ease: "power1.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center bottom",
          toggleActions: "play none none reverse",
        }
      });

      const targetElements = gsap.utils.toArray(["h3", "p", "a", bottomRef.current]);
      gsap.from(targetElements, {
        yPercent: 100,
        clipPath: "inset(0% 0% 100% 0%)",
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "90% bottom",
          end: "top center",
          toggleActions: "play none reverse none",
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="flex flex-col min-h-screen bg-[#246FA6] text-custom-white pt-24 pb-7 px-4 overflow-hidden">
      <div className="flex items-center justify-center md:px-[100px]">
        <img
          ref={logoRef}
          src="/icons/asset-logo2.svg"
          alt="Logo"
          className="w-[350px] md:w-[500px] lg:w-[1721px] h-auto"
        />
      </div>

      <div ref={contentRef} className="flex flex-col md:flex-row justify-between px-4 md:px-[60px] lg:px-[94px] mt-8 md:mt-[100px] lg:mt-[225px] space-y-8 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-[60px] lg:space-x-[100px] md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl lg:text-[32px]">Bali, Indonesia</h3>
            <p className="text-sm md:text-base mt-2 md:mt-4 lg:mt-8 leading-relaxed">
              Jl. Mawar No.7, Denpasar,
            </p>
            <p className="text-sm md:text-base">Bali 707</p>
            <p className="text-sm md:text-base">+62-857-6114</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl lg:text-[32px]">Jakarta, Indonesia</h3>
            <p className="text-sm md:text-base mt-2 md:mt-4 lg:mt-8 leading-relaxed">
              Jl. Permata 10 No.10, Central Jakarta,
            </p>
            <p className="text-sm md:text-base">Jakarta 707</p>
            <p className="text-sm md:text-base">+62-812-0440</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[60px] lg:space-x-[100px] text-lg md:text-xl lg:text-[32px]">
          <div className="flex flex-col space-y-2 md:space-y-[5px] lg:space-y-[10px]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Expertise</a>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-[5px] lg:space-y-[10px]">
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      <div ref={bottomRef} className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-16 lg:mt-32 text-sm md:text-base px-4 md:px-[60px] lg:px-[94px] space-y-4 md:space-y-0">
        <p>&copy; 2024 Copyright Archie Studio</p>
        <div className="flex space-x-4 md:space-x-[10px] lg:space-x-[20px]">
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Warranty</a>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
          <p>Created by |</p>
          <img src="/icons/logo-lapomps.svg" className="w-14 md:w-10 lg:w-auto h-auto" alt="Lapomps Logo" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
