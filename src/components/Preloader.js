import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const imgRefs = useRef([]);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  imgRefs.current = [];

  const addToImgRefs = (el) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.set(textRef.current, { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
        onComplete: () => {window.scrollTo(0, 0);
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
      delay: imgRefs.current,
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

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="fixed inset-0 bg-[#246FA6] overflow-hidden bg-center bg-no-repeat z-50">
            <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-[40vw] h-[70vh] z-10">
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-1.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-2.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-12.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-4.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-5.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-6.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-7.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-8.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-9.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-10.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-11.png)"}}></div>
                <div ref={addToImgRefs} className="absolute w-full h-full bg-cover" style={{backgroundImage: "url(/asset/project-3.png)"}}></div>
            </div>
            <p ref={textRef} className="mt-80 text-center font-play-fair italic text-[10em] text-custom-white overflow-hidden">Archie Studio</p>
    </div>
  );
};

export default Preloader;
