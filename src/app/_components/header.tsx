export default function Header() {
  return (
    <header className="bg-[#0B153C] py-[50px] lg:mt[70px]]">
      <div className="flex justify-between lg:justify-around ">
        <div className="">
          <h1 className="font-bold text-lg text-white ml-[35px]  md:text-[25px] lg:text-[32px]">
            Vaccination.ng
          </h1>
          <div className="bg-[#17C2EC] flex-1/2 h-0.5 mt-[8px] ml-[35px] w-[35%]"></div>
        </div>
        <div className="mb-10 lg:hidden">
          <div className="bg-[#C4C4C4] h-11 w-11 mr-[35px] rounded-sm p-2 flex flex-col items-end ">
            <div className="bg-[#ffffff] rounded-sm flex-1/2 w-6 "></div>
            <div className="bg-[#ffffff] rounded-sm flex-1/2  w-4 mt-[5px] "></div>
            <div className="bg-[#ffffff] rounded-sm   flex-1/2  w-6 mt-[5px] "></div>
            <div className="bg-[#ffffff] rounded-sm   flex-1/2  w-4 mt-[5px]"></div>
          </div>
        </div>

        <nav className="hidden lg:flex justify-center items-center text-white gap-6 h-[44px]">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Schedule</a>
          <a href="">Contact us</a>
        </nav>
        <a
          className="shadow-black shadow-lg hidden lg:flex items-center justify-center px-[30px] text-[#17C2EC] text-lg font-bold bg-white/10 rounded-2xl  backdrop-blur-sm h-[69px] w-[220px]"
          href=""
        >
          Check Status 
        </a>
      </div>
    </header>
  );
}
