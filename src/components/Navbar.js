const Navbar = () => {
  return (
    <nav className="h-[59px] bg-transparent pt-[54px] px-[20px] md:px-[100px] fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/icons/asset-logo.svg"
            className="w-[120px] h-[21px] md:w-[177px] md:h-[31px]"
            alt="Logo"
          />
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="bg-transparent h-[40px] w-[120px] md:h-[57px] md:w-[189px] border-custom-white border-[1px] rounded-full text-base md:text-2xl text-custom-white mr-[20px] md:mr-[63.5px]">
            Let's Talk
          </button>
          <a
            href="#"
            className="text-sm md:text-[24px] text-custom-white underline"
          >
            menu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
