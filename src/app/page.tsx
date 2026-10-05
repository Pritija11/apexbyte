import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/sections/Hero";
import Platform from "@/components/sections/Platform";
import WhyApexByte from "@/components/sections/WhyApexByte";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Platform />
        <WhyApexByte />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
