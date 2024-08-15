const Footer = () => {
  return (
    <section className="flex flex-col h-screen bg-[#246FA6] text-custom-white">
      <div className="flex items-center justify-center pt-28 md:pt-[102px] px-4 md:px-[100px]">
        <img
          src="/icons/asset-logo2.svg"
          alt="Logo"
          className="w-[300px] md:w-[1721px] h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-[94px] mt-8 md:mt-[280px]">
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-[100px] md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-[32px]">Bali, Indonesia</h3>
            <p className="text-sm md:text-base mt-2 md:mt-8 leading-relaxed">
              Jl. Mawar No.7, Denpasar,
            </p>
            <p className="text-sm md:text-base">Bali 707</p>
            <p className="text-sm md:text-base">+62-857-6114</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl md:text-[32px]">Jakarta, Indonesia</h3>
            <p className="text-sm md:text-base mt-2 md:mt-8 leading-relaxed">
              Jl. Permata 10 No.10, Central Jakarta,
            </p>
            <p className="text-sm md:text-base">Jakarta 707</p>
            <p className="text-sm md:text-base">+62-812-0440</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[173px] text-lg md:text-[32px]">
          <div className="flex flex-col mt-10 space-y-2 md:mt-0 md:space-y-[10px]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Expertise</a>
          </div>
          <div className="flex flex-col mt-10 space-y-2 md:mt-0 md:space-y-[10px]">
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-32 text-sm md:text-base px-4 md:px-[94px]">
        <div>
          <p>&copy; 2024 Copyright Archie Studio</p>
        </div>

        <div className="flex space-x-4 md:space-x-[20px]">
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Warranty</a>
        </div>

        <div className="flex space-x-1 md:space-x-4">
          <p>Created by |</p>
          <img src="/icons/logo-lapomps.svg" className="w-14 md:w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
