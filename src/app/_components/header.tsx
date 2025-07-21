export default function Header() {
  return (
    <header className=" pt-[50px] lg:mt[70px]]">
      <div className="mx-[35px] flex justify-between lg:justify-between lg:mx-[70px] ">
        <div className=" ">
          <h1 className="font-bold text-lg text-white  md:text-[25px] lg:text-[32px]">
            Vaccination.ng
          </h1>
          <div className="bg-[#17C2EC] flex-1/2 h-0.5 mt-[8px] w-[35%]"></div>
        </div>
        <div className=" lg:hidden">
          <div className="bg-[#C4C4C4] h-11 w-11 rounded-sm p-2 flex flex-col items-end ">
            <div className="bg-[#ffffff] rounded-sm flex-1/2 w-6 "></div>
            <div className="bg-[#ffffff] rounded-sm flex-1/2  w-4 mt-[5px] "></div>
            <div className="bg-[#ffffff] rounded-sm   flex-1/2  w-6 mt-[5px] "></div>
            <div className="bg-[#ffffff] rounded-sm   flex-1/2  w-4 mt-[5px]"></div>
          </div>
        </div>

        <nav className="hidden lg:flex justify-center items-center text-white gap-6 h-[44px]">
          <a href="" className="font-medium text-2xl text-[#C4C4C4] hover:text-white">Home</a>
          <a href="" className="font-medium text-2xl text-[#C4C4C4] hover:text-white">Services</a>
          <a href="" className="font-medium text-2xl text-[#C4C4C4] hover:text-white">Schedule</a>
          <a href="" className="font-medium text-2xl text-[#C4C4C4] hover:text-white">Contact us</a>
        </nav>
        <a
          className=" shadow-black shadow-lg hidden lg:flex items-center justify-center px-[30px] text-[#17C2EC] text-lg font-bold bg-white/10 rounded-2xl  backdrop-blur-sm h-[69px] w-[220px] mt-[-1%]"
          href=""
        >
          Check Status
        </a>
      </div>
    </header>
  );
}
