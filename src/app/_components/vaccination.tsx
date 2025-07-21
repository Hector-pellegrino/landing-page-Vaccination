import clock from "../../../public/clock.png";
import Image from "next/image";
import location from "../../../public/location.png";
import calendary from "../../../public/calendary.png";
import shield from "../../../public/shield.png";
export default function Schedule() {
  return (
    <section
      className="px-[35px] bg-[#0B153C]
        md:px-[50px]
        lg:px-[70px]
        "
    >
      <div id="conteiner" className="flex items-center gap-[10px]">
        <Image
          className="w-[30px] h-[30px]
            md:w-[50px] md:h-[50px]
            "
          src={clock}
          alt="ilustração de um relógio"
        />
        <p
          className="text-white font-bold text-[14px]
            md:text-[24px]
            "
        >
          Schedule your Vaccination
        </p>
      </div>
      <div className="bg-[#C4C4C4]/10 pt-[10px] rounded-lg mt-[20px]">
        <div
          className="bg-[#C4C4C4]/10 rounded-lg grid grid-cols-1
      md:grid-cols-2  
      lg:grid-cols-4
      "
        >
          <div className="flex mb-[15px] mt-[20px] gap-[10px] ml-[10px]
          md:mt-[40px] md:mb-[40px]
          lg:mt-[55px] lg:ml-[40px]">
            <Image src={location} alt="icone de localização " className="w-[30px] h-[30px]
            md:w-[50px] md:h-[50px]"/>
            <p className="font-bold text-[14px] text-white leading-4
            md:text-[20px] md:leading-6">
              <span className="opacity-50 font-semibold">
                Location
                <br />
              </span>
              Ikeja Lagos, Nigeria
            </p>
          </div>
          <div className="flex mb-[15px] gap-[10px] ml-[10px] 
            md:mt-[40px]
            lg:mt-[55px] lg:ml-[50px]">
            <Image src={calendary} alt="icoone de um calendário" className="w-[30px] h-[30px]
            md:w-[50px] md:h-[50px]"/>
            <p className="font-bold text-[14px] text-white leading-4
            md:text-[20px] md:leading-6">
              <span className="opacity-50 font-semibold">
                Date
                <br />
              </span>
              29 February, 2025
            </p>
          </div>
          <div className="flex mb-[15px] gap-[10px] ml-[10px]
          md:mb-[45px]
          lg:mt-[55px] lg:ml-[50px]">
            <Image src={shield} alt="icone de um escudo" className="w-[30px] h-[30px]
            md:w-[50px] md:h-[50px]"/>
            <p className="font-bold text-[14px] text-white leading-4
            md:text-[20px] md:leading-6
            ">
              <span className="opacity-50 font-semibold">
                Vaccine Type
                <br />
              </span>
              Mordena
            </p>
          </div>
          <div>

          <a
            href=""
            className="text-white font-bold text-[14px] flex items-center justify-center bg-[#17C2EC] w-[150px] h-[50px] ml-[10px] rounded-md
            md:text-[20px] md:w-[254px] md:h-[64px]
            lg:mt-[55px]"
          >
            Submit
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
