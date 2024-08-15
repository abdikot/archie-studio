const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center text-custom-white relative pb-14"
      style={{ backgroundImage: "url('/asset/hero-background.png')" }}
    >
      <div className="absolute bottom-0 left-0 right-0 px-4 py-8 sm:pl-[50px] sm:pr-[50px] sm:pb-16 md:pl-[100px] md:pr-[100px] md:pb-32 flex flex-col md:flex-row md:justify-between md:items-end">
        <div className="flex flex-col xl:max-w-full">
          <h1 className="text-[32px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[100px] max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[100%] text-left leading-tight sm:leading-snug md:leading-[121.02px]">
            Unveiling <span className="font-play-fair italic">Timeless Elegance</span> 
            <br />
            in Every Space
          </h1>
        </div>
        <div className="flex flex-col md:max-w-[28rem]">
          <p className="text-base sm:text-base leading-relaxed">
            Where design meets innovation, and spaces come alive with creativity.
            As architects and interior designers based in the vibrant heart of
            Indonesia, we bring forth a fusion of cultural richness and
            contemporary finesse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
