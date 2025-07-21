export default function result() {
  return (
    <section className="mt-[84px] mx-[35px] bg-[#C4C4C4]/10 rounded-md 
    lg:mx-[70px]
    ">
      <p
        className="font-bold text-[10px] text-white bg-[#C4C4C4]/15 rounded-t-md px-[30px] py-[14px]
      md:text-[20px] 
      lg:text[24px]
      "
      >
        Check your COVID-19 result on our Database
      </p>
      <form action="" className="pt-[21px] px-[12px]">
        <div className="grid grid-cols-1 gap-[20px] text-white xl:ml-[93px] xl:mr-[93px]
        lg:grid-cols-3
        ">
          <input
            type="text"
            placeholder="Name"
            className="border-[3px] border-[#C4C4C4]/15 rounded-lg font-medium text-[12px] placeholder:text-[#FFFfff]/50 py-[15px] pl-[15px]
            md:text-[20px]
            lg:text-[24px] 
            focus:border-[#17C2EC] focus:outline-none
            "
          />
          <input
            type="text"
            placeholder="NIK Number"
            className="border-[3px] border-[#C4C4C4]/15 rounded-lg font-medium text-[12px] placeholder:text-[#FFFfff]/50 py-[15px] pl-[15px]
            md:text-[20px]
            lg:text-[24px] 
            focus:border-[#17C2EC] focus:outline-none
            "
          />
          <button
            type="submit"
            className="text-[#17C2EC] w-[150px] h-[50px] border-[3px] border-[#17C2EC] bg-[#C4C4C4]/15 rounded-lg flex items-center justify-center
            md:text-[20px]
            lg:py-[30px] lg:px-[15px] lg:text-[24px]
            hover:cursor-pointer
            "
          >
            {" "}
            Check
          </button>
        </div>
        <div className="pb-[32px] xl:ml-[93px] xl:mr-[93px] ">
          <div className="bg-[#C4C4C4]/5 mt-[48px] py-[15px] px-[25px] rounded-lg flex justify-center left-[93px]">
            <p className="text-[10px] font-bold text-[#17C2EC] text-center
            md:text-[14px]
            lg:text-[24px]
            ">
              Need a certificate for your COVID-19 result? Please click <a className="underline hover:cursor-pointer">here</a>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
