import Header from "./_components/header";
import Hero from "./_components/hero";
import Vaccination from "./_components/vaccination";
import Advertising from "./_components/advertising";
import WhyVaccinated from "./_components/whyVaccinated";
import Background  from "../../public/bg-main.png"
import Result from "./_components/result"

export default function Home() {
  return (
    <main className="bg-[url(../../public/bg-main.png)] bg-no-repeat bg-cover">
    <Header/>
    <Hero/>
    <Vaccination/>
    <Advertising/>
    <Result/>
    <WhyVaccinated/>
    
    </main>
  );
}
