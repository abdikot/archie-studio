const Contact = () => {
  return (
    <section className="h-screen w-screen overflow-hidden flex flex-col py-[256px] relative">
      <div className="flex flex-row px-[100px] justify-between align-top">
        <h1 className="text-[64px] max-w-[700px]">
          Ready to transform your space?
        </h1>
        <button className="h-[23px]">
          <img src="/icons/button-contact.svg" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pl-[100px] pb-[256px] overflow-hidden">
        <h1 className="text-[160px] w-[300vw] font-normal text-left leading-[193.64px] tracking-[-5%] whitespace-nowrap">
          Let's Create{" "}
          <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;
