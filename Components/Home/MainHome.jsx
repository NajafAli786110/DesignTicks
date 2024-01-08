import About from "@/Components/Home/About";
import HeroSection from "@/Components/Home/HeroSection";
import OurWork from "@/Components/Home/OurWork";
import OurClient from "./OurClient";
import Insights from "./Insights";
import ContactForm from "../ContactForm";
import ReviewSlider from "./Slider/ReviewSlider";

const MainHome = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-48">
      <HeroSection />
      <OurWork />
      <About />
      <OurClient />
      <Insights />
      <ContactForm />
      <div className="punch-line w-full py-[150px] px-[110px] bg-primary-10 flex items-center justify-center">
        <div className="container">
          <h2 className="regular-133 poppins-font container">
            <sup className="text-white">"</sup>Your brand's journey deserves the
            best tools and skills. Whether it's a striking logo, an engaging
            banner, or a user-friendly website, we're here to make it happen.
            <sub className="text-white">"</sub>
          </h2>
        </div>  
      </div>
      <ReviewSlider />
    </main>
  );
};

export default MainHome;
