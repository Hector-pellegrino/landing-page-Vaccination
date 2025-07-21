import Image from "next/image";
import shield from "../../../public/shield.png";
import users from "../../../public/users.png";
import termometro from "../../../public/termometro.png";
import arrowBlue from "../../../public/arrow-right-blue.png";
import arrowGray from "../../../public/arrow-right-gray.png";

export default function whyVaccinated() {
  return (
    <section className="mt-[42px] mx-[35px] lg:mx-[70px] ">
      <div
        className="mb-[40px] flex flex-col gap-[17px]
      xl:flex-row xl:justify-between
      "
      >
        <h2
          className="text-white font-bold text-[24px] flex items-start justify-start
        md:text-[36px]
        lg:text-5xl
        "
        >
          Why get vaccinated today?
        </h2>
        <p
          className="text-white/50 font-normal text-[14px] flex items-start justify-start
        md:text-[20px]
        "
        >
          Magna adipiscing at elit at ornare lectus nibh lorem. <br />
          Ac, sed ac lorem pellentesque vestibulum risus matti. <br /> In
          molestie condimentum malesuada non.
        </p>
      </div>
      <div
        className="
      xl:flex gap-[75px]
      "
      >
        <div
          className="mr-[20%] md:mr-[40%] bg-[#C4C4C4]/20 p-[20px] rounded-tl-2xl rounded-tr-[50%] rounded-b-2xl mb-[30px] flex flex-col gap-[20px] 
        xl:mr-[0%] xl:mb-[0%] xl:gap-[50px]


        "
        >
          <Image
            className="w-[100px] h-auto
          
          "
            src={shield}
            alt="Icone de um escudo"
          />
          <h3
            className="font-bold text-[14px] text-[#17C2EC] 
          md:text-[24px]
          
          "
          >
            Protects your immune system <br /> against viruses
          </h3>
          <p
            className="text-white text-[12px] font-medium flex justify-start items-start
          md:text-[18px]
          lg:text-justify
          "
          >
            Velit ut consectetur mauris, orci amet, faucibus. <br /> Sit turpis
            fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
          </p>
          <div className="flex gap-[5px] items-center justify-start">
            <a
              className="text-[12px] font-bold text-[#17C2EC]
            md:text-[18px]
            "
              href=""
            >
              Read more
            </a>
            <Image
              className="w-[20px] h-auto"
              src={arrowBlue}
              alt="Seta para a direita"
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-[30px] mr-[40%]
        md:flex-row md:mr-[0%]
        xl:gap-[75px] xl:pt-[10%]
        "
        >
          <div
            className="border-[3px] border-[#ffffff]/50 p-[20px] flex flex-col gap-[25px] rounded-4xl
          md:w-[290px]
          xl:w-[350px] xl:gap-[40px]
          "
          >
            <Image src={users} alt="Icone de users" />
            <h4
              className="font-bold text-[14px] text-white
            md:text-[20px]
            lg:text-[24px]
            "
            >
              Minimize the spread of the Virus
            </h4>
            <div className="flex gap-[5px]">
              <a className="text-[#ffffff]/50" href="">
                Read more
              </a>
              <Image src={arrowGray} alt="Seta para a direita" />
            </div>
          </div>
          <div
            className="border-[3px] border-[#ffffff]/50 p-[20px] flex flex-col gap-[25px] rounded-4xl
          md:w-[290px]
          lx:w-[350px] lg:gap-[45px]
          "
          >
            <Image src={termometro} alt="Icone de um termometro" />
            <h4
              className="font-bold text-[14px] text-white
            md:text-[20px]
            lg:text-[24px]
            "
            >
              Protect yourself
            </h4>
            <div className="flex gap-[5px]">
              <a className="text-[#ffffff]/50" href="">
                Read more
              </a>
              <Image src={arrowGray} alt="Seta para a direita" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
