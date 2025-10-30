import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with state-of-the-art trauma centers",
    icon: "🚑",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cardiology",
    description: "Comprehensive heart care with advanced cardiac procedures",
    icon: "❤️",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pediatrics",
    description:
      "Specialized care for children from infancy through adolescence",
    icon: "👶",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Oncology",
    description: "Advanced cancer treatment with compassionate care",
    icon: "🎗️",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Orthopedics",
    description: "Bone and joint care with innovative surgical techniques",
    icon: "🦴",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Maternity Care",
    description: "Comprehensive care for mothers and newborns",
    icon: "🤰",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const Services = () => {
  return (
    <MaxWidthWrapper className="paddingY ">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Medical Services
        </h2>
        <div className="w-20 h-1 bg-app-blue rounded-full mx-auto" />
        <p className="page-description">
          Comprehensive healthcare services delivered with compassion and
          expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-app-blue/20 group-hover:bg-app-blue/10 transition-colors" />
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button
                variant="ghost"
                className="text-app-blue hover:text-app-blue/80 hover:bg-app-blue/10 p-0 px-2 rounded-full font-light"
              >
                Learn More →
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href={"/"}
          className={cn(
            "bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
            "px-8 py-4 rounded-full text-lg transition-all duration-300",
            "hover:scale-105 hover:shadow-lg cursor-pointer"
          )}
        >
          View All Services
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
