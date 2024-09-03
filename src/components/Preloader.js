import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const imgRefs = useRef([]);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  imgRefs.current = [];

  const data = [
    "/asset/project-1.png",
    "/asset/project-2.png",
    "/asset/project-12.png",
    "/asset/project-4.png",
    "/asset/project-5.png",
    "/asset/project-6.png",
    "/asset/project-7.png",
    "/asset/project-8.png",
    "/asset/project-9.png",
    "/asset/project-10.png",
    "/asset/project-11.png",
    "/asset/project-3.png"
  ]

  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(textRef.current, { opacity: 0, scale: 0.5 });

      const tl = gsap.timeline({
        onComplete: () => {
          window.scrollTo(0, 0);
          if (onComplete) onComplete();
        },
      });

      imgRefs.current.forEach((img) => {
        tl.from(img, {
          yPercent: 100,
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "power1.inOut",
          delay: 0.1,
          duration: 0.5,
        });
      });

      tl.to(imgRefs.current, {
        scale: 1.3,
        y: 400,
        duration: 1,
      });

      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        y: -200,
        duration: 1,
      });

      tl.to(sectionRef.current, {
        clipPath: "inset(0% 0% 100% 0% round 0 0 50% 50%)",
        ease: "power2.inOut",
        duration: 1,
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({
        onComplete: () => {
          window.scrollTo(0, 0);
          if (onComplete) onComplete();
        },
      });

      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        ease: "power1.inOut",
        y: 0,
        duration: 1,
      });

      imgRefs.current.forEach((img) => {
        tl.from(img, {
          xPercent: -100,
          clipPath: "inset(0% 0% 0% 100%)",
          ease: "power1.inOut",
          delay: 0.05,
          duration: 0.2,
        });
      });

      tl.to(textRef.current, {
        opacity: 0,
        ease: "power1.inOut",
        duration: 0.2,
      });

      tl.to(sectionRef.current, {
        clipPath: "inset(0% 0% 100% 0% round 0 0 50% 50%)",
        ease: "power2.inOut",
        duration: 1,
      });
    });
  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      className="fixed inset-0 bg-custom-blue overflow-hidden bg-center bg-no-repeat z-50"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[40vw] md:h-[70vh] z-0 md:z-10 bg-center">
        {data.map((src, index) => (
          <div
            key={index}
            ref={addToImgRefs}
            className="absolute w-full h-full bg-cover"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <p
        ref={textRef}
        className="mt-80 text-center font-play-fair italic text-[5em] md:text-[10em] font-bold md:font-normal text-custom-blue md:text-custom-white overflow-hidden z-20 md:z-0"
      >
        Archie Studio
      </p>
    </div>
  );
};

export default Preloader;
