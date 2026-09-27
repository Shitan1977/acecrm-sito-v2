import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import StudyCases from "@/components/StudyCases";
import Testimonials from "@/components/Testimonials";
import LatestNews from "@/components/LatestNews";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
export default function Home() {
  return (
    <>
      <Header />

      <main id="home">
        <Hero />
        <Services />
        <Pricing />
        <StudyCases />
        <Testimonials />
        <LatestNews />
        <CallToAction />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
