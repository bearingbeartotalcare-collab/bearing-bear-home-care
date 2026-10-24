import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import PromoPopup from "@/components/PromoPopup";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function Home() {
  return (
    <>
   <PromoPopup />

       <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <FAQ />
      <Contact />
        
         <ServiceAreaMap />
    </>
  );
}



