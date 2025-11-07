import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const services = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with state-of-the-art trauma centers",
    icon: "🚑",
    image: "/images/emer.jpg",
  },
  {
    title: "Gynaecology",
    description:
      "Expert gynecological care including well-woman exams, minimally invasive surgery, and reproductive health.",
    icon: "👱‍♀️",
    image: "/images/gynae.jpg", // Gynecological ultrasound
  },
  {
    title: "Pediatrics",
    description:
      "Specialized care for children from infancy through adolescence",
    icon: "👶",
    image: "/images/ped.jpg", // Doctor examining child
  },
  {
    title: "Infertility management",
    description:
      "Comprehensive fertility evaluations, advanced treatments like IVF, and personalized care plans.",
    icon: "🎗️",
    image: "/images/infer.jpg", // Fertility lab and embryos
  },
  {
    title: "General Surgery and dermatology",
    description:
      "Specialists in general surgery procedures and medical/surgical dermatology.",
    icon: "✂️",
    image: "/images/surg.jpg", // Surgical procedure
  },
  {
    title: "Maternity Care",
    description: "Comprehensive care for mothers and newborns",
    icon: "🤰",
    image: "/images/mar.jpg", // Newborn baby care
  },
];

const Services = () => {
  return (
    <MaxWidthWrapper className="paddingY " id="services">
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
                priority
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
              {/* <Button
                variant="ghost"
                className="text-app-blue hover:text-app-blue/80 hover:bg-app-blue/10 p-0 px-2 rounded-full font-light"
              >
                Learn More →
              </Button> */}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-12">
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
      </div> */}
    </MaxWidthWrapper>
  );
};

export default Services;
