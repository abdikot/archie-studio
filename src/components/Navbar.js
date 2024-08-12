const Navbar = () => {
  return (
    <nav className="h-[59px] bg-transparent pt-[57px] pl-[100px] pr-[100px] fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src="/icons/asset-logo.svg"></img>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-transparent h-[57px] w-[189px]  border-[#FFF9F4] border-[1px] rounded-[87px]  text-[24px] text-[#FFF9F7] font-medium mr-[63.5px]">
            Let's Talk
          </button>
          <a
            href="#"
            className=" font-medium text-[24px] text-[#FFF9F4] underline"
          >
            menu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
