const Contact = () => {
  return (
    <section className="relative min-h-screen text-custom-gray flex flex-col py-10 sm:py-64">
      <div className="flex flex-col md:flex-row px-4 md:px-[100px] justify-between items-start">
        <h1 className="text-3xl sm:text-5xl md:text-[64px] max-w-full md:max-w-auto leading-[129.05px]">
          Ready to transform your space?
        </h1>
        <button className="h-10 md:h-[57px] mt-4 md:mt-0">
          <img src="/icons/button-contact.svg" alt="Contact Button" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-[100px] pb-10 sm:pb-20 md:pb-64 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[150px] leading-tight md:leading-[100px] w-full text-center md:text-left">
          Let's Create{" "}
          <span className="font-play-fair italic">Your Vision</span> Together
        </h1>
      </div>
    </section>
  );
};

export default Contact;
