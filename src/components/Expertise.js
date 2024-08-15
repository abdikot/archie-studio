const Expertise = () => {
  return (
    <section className="h-auto md:h-screen flex flex-col justify-between pt-5 px-6 sm:px-10 md:px-0 md:pt-[128px]">
      <p className="text-center text-custom-gray mb-16 text-xl md:text-2xl leading-[29.05px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[801px] relative text-custom-white">
        <div className="relative w-full md:w-[50%] h-80 md:h-full">
          <img
            src="/asset/expertise-architecture.png"
            className="w-full h-full object-cover"
            alt="Architectural Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-0">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
              Archi<span className="font-play-fair italic">tectural</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-10 lg:pt-16 px-[20px] sm:px-[50px] md:px-[100px] lg:px-[230px]">
              With a team of visionary architects, we embark on the journey of
              architectural innovation. From conceptualization to execution, we
              push the boundaries of design, creating structures that seamlessly
              blend form, function, and sustainability.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-[50%] h-80 md:h-full mt-6 md:mt-0">
          <img
            src="/asset/expertise-interior.png"
            className="w-full h-full object-cover"
            alt="Interior Design Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-0">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
              Interior <span className="font-play-fair italic">Design</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-10 lg:pt-16 px-[20px] sm:px-[50px] md:px-[100px] lg:px-[230px]">
              Our interior design team is a symphony of creativity and
              functionality. We curate interiors that tell stories, where each
              element is thoughtfully chosen to enhance the overall aesthetic
              and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
