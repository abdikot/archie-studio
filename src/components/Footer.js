const Footer = () => {
  return (
    <section className="flex flex-col h-screen bg-[#246FA6] text-[#FFF9F7]">
      <div className="flex items-center justify-center mt-[102px] px-[100px]">
        <img
          src="/icons/asset-logo2.svg"
          alt="Logo"
          style={{ width: "1721px", height: "370.49px" }}
        />
      </div>

      {/* Footer Links and Info */}
      <div className="flex justify-between px-[94px] mt-[280px]">
        {/* Location Information */}
        <div className="flex space-x-[100px]">
          <div className="flex flex-col">
            <h3 className="text-[32px] font-normal">Bali, Indonesia</h3>
            <p className="text-[16px] mt-[32px] leading-[22px]">
              Jl. Mawar No.7, Denpasar,
            </p>
            <p className="text-[16px]">Bali 707</p>
            <p className="text-[16px]">+62-857-6114</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[32px] font-normal">Jakarta, Indonesia</h3>
            <p className="text-[16px] mt-[32px] leading-[22px]">
              Jl. Permata 10 No.10, Central Jakarta,
            </p>
            <p className="text-[16px]">Jakarta 707</p>
            <p className="text-[16px]">+62-812-0440</p>
          </div>
        </div>

        <div className="flex space-x-[173px] text-[32px]">
          <div className="flex flex-col space-y-[10px]">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Expertise
            </a>
          </div>
          <div className="flex flex-col space-y-[10px]">
            <a href="#" className="hover:underline">
              Projects
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[128px] text-[16px] pl-[94px] pr-[100px]">
        <div>
          <p>&copy; 2024 Copyright Archie Studio</p>
        </div>

        <div className="flex space-x-[20px]">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Warranty
          </a>
        </div>

        <div>
          <p>Created by | DPXPS</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
