import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import { Phone, MapPin, Clock, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <MaxWidthWrapper className="paddingY text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Take the Next Step in Your Health Journey?
          </h2>
          <p className="text-xl opacity-90">
            Contact us today to schedule your appointment or learn more about
            our services. Your health is our priority.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span className="text-lg">(234) 800-MICHAEL</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">51 Locations Across Nigeria</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5" />
              <span className="text-lg">24/7 Emergency Services</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Book Appointment */}
          {/* <CTALink
            href={"/"}
            className={cn(
              "bg-white text-app-blue hover:bg-gray-50 font-semibold",
              "w-full p-4 sm:p-6 rounded-2xl transition-all duration-300",
              "hover:scale-105 hover:shadow-xl",
              "flex flex-col items-center justify-center space-y-3",
              "border-2 border-transparent hover:border-app-blue/20"
            )}
            iconWrapperStyle="w-12 h-12 sm:w-16 sm:h-16 bg-app-blue rounded-full flex items-center justify-center"
            textStyle="text-sm sm:text-base font-semibold text-center leading-tight"
            text="Book Appointment"
            Icon={Calendar}
          /> */}

          <Link
            href={"/"}
            className={cn(
              "bg-white text-app-blue hover:bg-gray-50 font-semibold",
              "w-full p-4 sm:p-6 rounded-2xl transition-all duration-300",
              "hover:scale-105 hover:shadow-xl",
              "flex flex-col items-center justify-center space-y-3",
              "border-2 border-transparent hover:border-app-blue/20"
            )}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-app-blue rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-center leading-tight">
              Book Appointment Online
            </span>
          </Link>

          {/* Find Location */}
          <Link
            href={"/"}
            className={cn(
              "border-2 border-white text-white hover:bg-app-vio hover:text-white",
              "w-full p-4 sm:p-6 rounded-2xl font-semibold transition-all duration-300",
              "hover:scale-105 hover:shadow-xl",
              "flex flex-col items-center justify-center space-y-3",
              "bg-transparent backdrop-blur-sm"
            )}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white">
              <MapPin className="size-6 sm:size-8 text-white" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-center leading-tight">
              Find Nearest Location
            </span>
          </Link>

          {/* Emergency Contact */}
          <Link
            href={"/"}
            className={cn(
              "text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm",
              "w-full p-4 sm:p-6 rounded-2xl font-semibold transition-all duration-300",
              "hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white/30",
              "flex flex-col items-center justify-center space-y-3"
            )}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-center leading-tight">
              Emergency Contact
            </span>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CTA;

// function CTALink({
//   text,
//   className,
//   iconWrapperStyle,
//   textStyle,
//   href,
//   Icon,
// }: {
//   text: string;
//   className: string;
//   iconWrapperStyle: string;
//   textStyle: string;
//   href: Url | string;
//   Icon: ForwardRefExoticComponent<
//     Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
//   >;
// }) {
//   return (
//     <Link href={href} className={className}>
//       <div className={iconWrapperStyle}>
//         <Icon className={"size-6 sm:size-8 white"} />
//       </div>
//       <span className={textStyle}>{text}</span>
//     </Link>
//   );
// }
