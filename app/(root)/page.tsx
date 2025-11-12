import About from "@/components/about";
import Banner from "@/components/banner";
import CTA from "@/components/call-to-action";
import Services from "@/components/services";
import Testimonials from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div>
      {/* Nav */}
      <Banner />

      <About />

      <div className="bg-gray-50">
        <Services />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div className="bg-app-blue/5">
        <Testimonials />
      </div>
      <div className="bg-app-blue">
        <CTA />
      </div>
    </div>
  );
}
