const Expertise = () => {
  return (
    <section className="h-screen flex flex-col justify-between pt-[128px]">
      <p className="text-[#1F1F1F] text-center">Our Expertise</p>

      <div className="flex w-full h-[90%] relative">
        <div className="w-[50%] h-full relative flex items-center justify-center">
          <img
            src="/asset/expertise-architecture.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#FFF9F7] text-6xl font-medium">
              Archi<span className="font-play-fair italic">tectural</span>
            </h1>
            <p className="text-[#FFF9F7] text-[10px]  text-center mt-[10px] px-[230px]">
              With a team of visionary architects, we embark on the journey of
              architectural innovation. From conceptualization to execution, we
              push the boundaries of design, creating structures that seamlessly
              blend form, function, and sustainability.
            </p>
          </div>
        </div>
        <div className="w-[50%] h-full relative flex items-center justify-center">
          <img
            src="/asset/expertise-interior.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#FFF9F7] text-6xl font-medium">
              Interior <span className="font-play-fair italic">Design</span>
            </h1>
            <p className="text-[#FFF9F7] text-[10px]  text-center mt-[10px] px-[230px]">
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
