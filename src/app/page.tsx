
import BeginBtn from "./sections/BeginBtn";
import CareBanner from "./sections/CareBanner";
import Exhortation from "./sections/Exhortation";
import HeroSection from "./sections/HeroSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Exhortation />
      <BeginBtn />
      <CareBanner />
    </div>
  );
}
