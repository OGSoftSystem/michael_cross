import MaxWidthWrapper from "./max-width-wrapper";
import { CustomCarousel } from "./cus-carousel";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Count from "./count";

const About = () => {
  return (
    <MaxWidthWrapper className="paddingY">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                About Michael Cross Specialists Hospital
              </h3>
              <div className="w-24 h-1.5 bg-app-blue rounded-full" />
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Michael Cross Specialists Hospital is the fifth largest
                for-profit health system in Nigeria, operating{" "}
                <strong>51 hospitals</strong> across <strong>14 states</strong>,
                with more than <strong>360 outpatient locations</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our network includes over{" "}
                <strong>57,000 staff and affiliated physicians</strong>{" "}
                dedicated to providing the highest quality, value-based
                healthcare. Eighteen of our facilities are members of the
                Michael Cross Specialists Foundation, a 501(c)(3) not-for-profit
                public charity.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant={"default"}
              className={cn(
                "bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                "px-8 py-6 rounded-full transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]"
              )}
            >
              Meet Our Leadership
            </Button>

            <Button
              variant={"outline"}
              className={cn(
                "border-app-blue text-app-blue hover:bg-app-blue hover:text-white",
                "px-8 py-6 rounded-full font-semibold transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]"
              )}
            >
              Download Facts
            </Button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="lg:col-span-2 relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <CustomCarousel />
          </div>

          {/* Decorative Element */}
          <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-app-blue/10 rounded-full" />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
        <Values start={0} end={10} suffix="+" text="Hospitals" />

        <Values start={0} end={14} text="States" />

        <Values start={0} end={360} suffix="+" text="Outpatient Locations" />

        <Values start={0} end={300} suffix="+" text="Medical Staff" />
      </div>
    </MaxWidthWrapper>
  );
};

export default About;

function Values({
  start,
  end,
  suffix,
  text,
}: {
  start: number;
  end: number;
  suffix?: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <Count
        start={start}
        end={end}
        suffix={suffix}
        className="text-3xl lg:text-4xl font-bold text-app-blue mb-2"
      />
      <div className="text-sm text-gray-600 font-medium">{text}</div>
    </div>
  );
}
