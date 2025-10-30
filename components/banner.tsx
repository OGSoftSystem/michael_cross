import Image from "next/image";
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { ComponentPropsWithRef } from "react";
import { IconType } from "react-icons";

const Banner = () => {
  return (
    <div className="relative w-full py-24 md:py-0 md:h-[700px]">
      <Image
        src="/images/hospital.jpg"
        alt="Modern hospital facility"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <MaxWidthWrapper className="relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Healing Hearts,
                <span className="text-app-blue drop-shadow-lg"> Restoring</span>
                {/* <br /> */}&nbsp;
                <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hope
                </span>
              </h1>

              <p className="text-[1rem] md:text-2xl text-gray-200 font-light max-w-[35ch] mx-auto lg:mx-0 leading-relaxed">
                Your journey to wellness begins with compassionate care and ends
                with renewed strength.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/appointment"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-app-blue hover:bg-app-blue/90 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                )}
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            <MainLink
              href="/doctors"
              Icon={FaUserDoctor}
              title="Find a Doctor"
              description="Expert medical professionals"
            />
            <MainLink
              href="/locations"
              Icon={FaLocationDot}
              title="Our Locations"
              description="Find nearest facility"
            />
            <MainLink
              href="/appointment"
              Icon={SlCalender}
              title="Book Appointment"
              description="Schedule your visit"
            />
          </div>
        </div>
        {/* Emergency Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-app-blue/90 text-white py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="font-semibold">
              🚨 Emergency Services Available 24/7 • Call: (234) 800-MICHAEL
            </p>
          </div>
        </div> */}
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;

type MainLinkProps = ComponentPropsWithRef<typeof Link> & {
  title: string;
  Icon: IconType;
  description?: string;
};

function MainLink({ title, Icon, description, ...props }: MainLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 p-4 md:p-6 rounded-xl cursor-pointer flex flex-col items-center text-center space-y-3 hover:scale-105 hover:shadow-2xl",
        "hover:border-app-blue/50"
      )}
    >
      <div className="p-3 bg-app-blue rounded-full group-hover:bg-app-blue/90 transition-colors">
        <Icon  className="text-white md:size-8" />
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-white text-sm md:text-base leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-gray-300 leading-tight">{description}</p>
        )}
      </div>
    </Link>
  );
}
