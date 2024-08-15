const Expertise = () => {
  return (
    <section className="h-auto md:min-h-screen flex flex-col justify-between pt-5 px-6 sm:px-10 md:px-0 md:pt-[128px]">
      <p className="text-center text-custom-gray mb-16 text-xl md:text-2xl leading-[29.05px]">
        Our Expertise
      </p>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[801px] relative text-custom-white">
        <div className="relative w-full md:w-1/2 h-80 md:h-full">
          <img
            src="/asset/expertise-architecture.png"
            className="w-full h-full object-cover"
            alt="Architectural Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
            <h1 className="text-xxl4 sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-xxl10">
              Archi<span className="font-play-fair italic">tectural</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-8 lg:pt-12 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]">
              With a team of visionary architects, we embark on the journey of
              architectural innovation. From conceptualization to execution, we
              push the boundaries of design, creating structures that seamlessly
              blend form, function, and sustainability.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-80 md:h-full mt-6 md:mt-0">
          <img
            src="/asset/expertise-interior.png"
            className="w-full h-full object-cover"
            alt="Interior Design Expertise"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
            <h1 className="text-xxl4 sm:text-[40px] md:text-[60px] md:text-center lg:text-[80px] xl:text-xxl10">
              Interior <span className="font-play-fair italic">Design</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-center pt-4 md:pt-8 lg:pt-12 px-6 sm:px-12 md:px-16 lg:px-[100px] xl:px-[150px]">
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
