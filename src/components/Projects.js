const Project = () => {
  return (
    <section className="relative h-[3792px]">
      <div className="h-screen flex flex-col items-center justify-between py-[128px]">
        <p className="text-center text-[#1F1F1F] text-[24px] leading-[29.05px] tracking-[-5%] font-normal">
          Our Project
        </p>

        <h1 className="mt-[150px] text-center text-[100px] font-normal tracking-[-5%] px-[450px]">
          Discover the Canvas of{" "}
          <span className="font-play-fair italic">Our Creativity</span>
        </h1>

        <button className="bg-transparent h-[57px] w-[256px]  border-[#1F1F1F] border-[1px] rounded-[87px]  text-[24px] text-[#1F1F1F] font-normal">
          See all project
        </button>
      </div>

      <div className="flex flex-row px-[100px]">
        <div className="flex flex-col w-[450px] mr-[185px]">
          <img
            src="/asset/project-1.png"
            className="w-full h-[450px] object-cover"
          ></img>
          <img
            src="/asset/project-4.png"
            className="w-full h-[450px] object-cover  mt-[128px]"
          ></img>
          <img
            src="/asset/project-7.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
          <img
            src="/asset/project-10.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
        </div>
        <div className="flex flex-col w-[450px] mr-[185px]">
          <img
            src="/asset/project-2.png"
            className="w-full h-[450px] object-cover mt-[248px]"
          ></img>
          <img
            src="/asset/project-5.png"
            className="w-full h-[450px] object-cover  mt-[128px]"
          ></img>
          <img
            src="/asset/project-8.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
          <img
            src="/asset/project-11.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
        </div>
        <div className="flex flex-col w-[450px] mt-[122px]">
          <img
            src="/asset/project-3.png"
            className="w-full h-[450px] object-cover"
          ></img>
          <img
            src="/asset/project-6.png"
            className="w-full h-[450px] object-cover  mt-[148px]"
          ></img>
          <img
            src="/asset/project-9.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
          <img
            src="/asset/project-12.png"
            className="w-full h-[450px] object-cover mt-[128px]"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Project;
