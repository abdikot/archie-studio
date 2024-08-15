const Navbar = () => {
  return (
    <nav className="h-[59px] bg-transparent pt-[54px] px-5 md:px-[50px] lg:px-[100px] fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/icons/asset-logo.svg"
            className="w-[120px] h-[21px] sm:w-[140px] sm:h-[25px] md:w-[150px] md:h-[27px] lg:w-[177px] lg:h-[31px]"
            alt="Logo"
          />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <button className="bg-transparent h-10 w-[120px] sm:h-[45px] sm:w-[140px] md:h-[50px] md:w-[160px] lg:h-[57px] lg:w-[189px] border-custom-white border-[1px] rounded-full text-base sm:text-lg md:text-xl lg:text-2xl text-custom-white mr-5 sm:mr-[30px] md:mr-10 lg:mr-[63.5px]">
            Let's Talk
          </button>
          <a
            href="#"
            className="text-sm sm:text-base md:text-lg lg:text-2xl text-custom-white underline"
          >
            menu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
