const Contact = () => {
  return (
    <section className="h-screen w-screen text-custom-gray overflow-hidden flex flex-col py-[256px] relative">
      <div className="flex flex-col md:flex-row px-4 md:px-[100px] justify-between items-start">
        <h1 className="text-4xl md:text-[64px] max-w-full md:max-w-[700px]">
          Ready to transform your space?
        </h1>
        <button className="h-10 md:h-[23px] mt-4 md:mt-0">
          <img src="/icons/button-contact.svg" alt="Contact Button"/>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pl-4 md:pl-[100px] pb-10 md:pb-[256px] overflow-hidden">
        <h1 className="text-5xl md:text-[160px] w-full md:w-[300vw] font-normal text-left leading-tight md:leading-[193.64px]">
          Let's Create{" "}
          <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;