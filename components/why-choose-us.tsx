import Count from "./count";
import MaxWidthWrapper from "./max-width-wrapper";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Expert Medical Team",
    description:
      "Board-certified physicians and specialists with decades of combined experience",
  },
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art medical equipment and innovative treatment approaches",
  },
  {
    title: "Patient-Centered Care",
    description:
      "Personalized treatment plans focused on your unique health needs",
  },
  {
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency care when you need it most",
  },
  {
    title: "Multiple Locations",
    description: "Convenient access to quality healthcare across Nigeria",
  },
  {
    title: "Insurance Partnerships",
    description: "We work with major insurance providers for seamless billing",
  },
];

const WhyChooseUs = () => {
  return (
    <MaxWidthWrapper className="paddingY">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Michael Cross Specialist Hospital?
            </h2>
            <div className="w-20 h-1.5 bg-app-blue rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              For over two decades, we&apos;ve been setting the standard for
              excellence in healthcare, combining medical expertise with genuine
              compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-app-blue shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-app-blue text-white p-6 rounded-2xl">
                {/* <div className="text-3xl font-bold">98%</div> */}
                <Count
                  start={0}
                  end={98}
                  suffix="%"
                  className="text-3xl font-bold"
                />
                <div className="text-sm opacity-90">
                  Patient Satisfaction Rate
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <Count
                  start={0}
                  end={30}
                  suffix="+"
                  className="text-3xl font-bold text-gray-900"
                />
                <div className="text-sm text-gray-600">Specialist Doctors</div>
              </div>
              <div className="bg-app-blue text-white p-6 rounded-2xl">
                <Count
                  start={0}
                  end={1}
                  className="text-3xl font-bold"
                />
                <div className="text-sm opacity-90">Hospital Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhyChooseUs;
