const Project = () => {
  return (
    <section className="relative h-auto py-10 md:py-0">
      <div className="h-auto md:min-h-screen text-custom-gray flex flex-col items-center justify-between py-10 md:py-32">
        <p className="text-center text-xl md:text-2xl leading-[29.05px]">
          Our Project
        </p>

        <h1 className="mt-10 md:mt-[150px] text-center text-xxl4 md:text-xxl10 px-4 md:px-[250px] lg:px-[350px] xl:px-[450px]">
          Discover the Canvas of{" "}
          <span className="font-play-fair italic">Our Creativity</span>
        </h1>

        <button className="bg-transparent h-[40px] w-[180px] md:h-[57px] md:w-[256px] border-custom-gray border-[1px] rounded-full text-base md:text-2xl mt-8">
          See all projects
        </button>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-[50px] lg:px-[100px] mt-10 md:mt-0">
        <div className="flex flex-col w-full md:w-1/3 md:mr-[30px] lg:mr-[60px] xl:mr-[100px]">
          <img
            src="/asset/project-1.png"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <img
            src="/asset/project-4.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-32"
          />
          <img
            src="/asset/project-7.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-32"
          />
          <img
            src="/asset/project-10.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-32"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 md:mr-[30px] lg:mr-[60px] xl:mr-[100px] mt-10 md:mt-12 lg:mt-[248px]">
          <img
            src="/asset/project-2.png"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <img
            src="/asset/project-5.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
          <img
            src="/asset/project-8.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
          <img
            src="/asset/project-11.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/3 mt-10 md:mt-0 lg:mt-32">
          <img
            src="/asset/project-3.png"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />
          <img
            src="/asset/project-6.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
          <img
            src="/asset/project-9.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
          <img
            src="/asset/project-12.png"
            className="w-full h-[300px] md:h-[450px] object-cover mt-8 md:mt-12 lg:mt-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
