import ImgVaccine from "../../../public/img-coronavirus-vaccine.png";
import MedicoVirus from "../../../public/medico-virus.png";
import Virus from "../../../public//virus.png";
import Medicos from "../../../public//medicos.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-[100px] bg-[#0B153C]">
      <div className="mx-[35px] lg:mx-[70px] md:ml-[50px] md:mr-0">
        <div className="xl:flex justify-between">
          <div>
            <p className="font-bold text-[12px] text-[#17C2EC] md:text-[18px]">
              Get Vaccinated. Boost your Immune System
            </p>
            <h2 className="text-white font-extrabold text-2xl mt-[20px] md:text-[36px]">
              COVID-19 Vaccination <br /> Got Easier With, <br />
              <span className="text-[#17C2EC]">Vaccination.ng</span>
            </h2>
            <p className="text-white opacity-70 font-bold text-[14px] mt-[20px] items-start block md:hidden">
              Vaccination.ng will help you find the <br/> nearest centre for
              vaccination, in all <br/> 36 states in Nigeria.
            </p>
            <p className="text-white opacity-70 font-bold text-[14px] mt-[20px] md:text-[20px] md:mr-[246px] items-start hidden md:block">
              Vaccination.ng will help you find the nearest <br/> centre for
              vaccination, in all 36 states in Nigeria.
            </p>
            <div className="flex mt-[40px] gap-[20px]">
              <a
                className="text-white text-[14px] font-bold py-[22px] px-[27px] bg-[#17C2EC] rounded-3xl tracking-wide"
                href=""
              >
                Get Vaccine
              </a>
              <a
                className="text-white text-[14px] font-bold py-[20px] px-[25px] bg-white/10 rounded-3xl border-[2px] border-[#17C2EC] tracking-wide "
                href=""
              >
                Help Centre
              </a>
            </div>
          </div>
          <div className="mt-[50px] mx-[35px] relative w-[256px] h-[275] 
          md:w-[512px] md:h-[550px] md:ml-[70px]
          lg:w-[512px] lg:h-[550px] xl:mt-0">
            <div className="relative">
              <Image
                className=" w-full h-full"
                src={ImgVaccine}
                alt="Imagem d pote de vacina"
              ></Image>
              <div className="flex absolute justify-between w-full top-[50%] translate-y-[-50%]">
                <Image
                  className="translate-x-[-50%] w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                  src={MedicoVirus}
                  alt="Medico e o virus"
                />
                <Image
                  className="translate-x-[50%] w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
                  src={Virus}
                  alt="Imagem ilustrativa de um virus"
                />
              </div>
              <div className="bg-[#0B153C]">
                <div className="w-[240px] h-[70px] md:w-[374px] md:h-[100px] shadow-black shadow-lg flex gap-[10px] py-[15px] px-[20px] bg-white/45 rounded-md bg-cover absolute bottom-[0%] translate-x-[-20%] translate-y-[50%]">
                  <div className="w-full">
                    <Image
                      src={Medicos}
                      alt="Imagem de tres medicos"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-[14px] md:text-[24px]">
                      20+ <br />
                      <span className="text-[#17C2EC] font-bold text-[14px] md:text-[24px]">Specialists</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[50px] "></div>
    </section>
  );
}
