import MaxWidthWrapper from "./max-width-wrapper";
import { CustomCarousel } from "./customs";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Count from "./count";
import Link from "next/link";

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
                Michael Cross Specialists Hospital is a premier healthcare
                destination in the heart of Abuja, setting a new standard for
                specialist medical care in Nigeria. While we are proud to be a
                growing name in the Nigerian healthcare sector, our core focus
                is uncompromising: delivering the highest quality, value-based
                healthcare from our state-of-the-art facility in Abuja.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our Abuja hospital is home to a dedicated team of highly-skilled
                specialist physicians and staff, all committed to a single
                mission: your well-being. As a key member of the Michael Cross
                Specialists Foundation, a not-for-profit public charity, we are
                deeply invested in the health of our community, ensuring our
                care is both advanced and accessible.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={"/leadership"}
              className={cn(
                "",
                buttonVariants({
                  variant: "default",
                  className:
                    "bg-app-blue hover:bg-app-blue/90 text-white font-semibold px-8 py-6  transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[200px] rounded-full",
                })
              )}
            >
              Meet Our Leadership
            </Link>

            <Link
              href={"/file.png"}
              download={"Medical-Facts.png"}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className:
                    "border-app-blue text-app-blue hover:bg-app-blue hover:text-white px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[200px]",
                })
              )}
            >
              Download Facts
            </Link>
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
        <Values start={0} end={1} text="Hospital" />

        <Values start={0} end={1} text="State" />

        <Values start={0} end={310} suffix="+" text="Outpatient Locations" />

        <Values start={0} end={50} suffix="+" text="Medical Staff" />
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
