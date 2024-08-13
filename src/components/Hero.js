const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center text-[#FFF9F7] relative"
      style={{ backgroundImage: "url('/asset/hero-background.png')" }}
    >
      <div className="absolute bottom-0 left-0">
        <div className="pl-[100px] pb-[128px]">
          <h1 className="text-[100px] font-normal max-w-[70%] text-left leading-[121.02px] tracking-[-5%]">
            Unveiling{" "}
            <span className="font-play-fair italic">Timeless Elegance</span> in
            Every Space
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div className="pr-[100px] pb-[128px] max-w-[34rem] text-left">
          <p className="text-[16px] font-normal leading-relaxed">
            Where design meets innovation, and spaces come alive with
            creativity. As architects and interior designers based in the
            vibrant heart of Indonesia, we bring forth a fusion of cultural
            richness and contemporary finesse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
