import Image from "next/image";
import Moderna from "../../../public/Moderna_logo.png"
import Pfizer from "../../../public/Pfizer_logo.png"
import AstraZeneca from "../../../public/AstraZeneca_logo.png"
import Sinovac from "../../../public/sinovac-logo.png"

export default function advertising() {
    return(
        <section className="bg-white flex my-[25px] mx-[5px] gap-[12px] items-center justify-center">
            <Image
            className="w-[72px] h-auto
            md:w-[150px]
            lg:w-auto"
            src={Moderna}
            alt="logo da Moderna"
            />
            <Image
            className="w-[72px] h-auto
            md:w-[150px]
            lg:w-auto"
            src={Pfizer}
            alt="logo da Pfizer"
            />
            <Image
            className="w-[72px] h-auto
            md:w-[150px]
            lg:w-auto"
            src={AstraZeneca}
            alt="logo da AstraZeneca"
            />
            <Image
            className="w-[72px] h-auto
            md:w-[150px]
            lg:w-auto"
            src={Sinovac}
            alt="logo da Sinovac"
            />
        </section>
    )
}