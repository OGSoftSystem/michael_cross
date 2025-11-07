import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";

const testimonials = [
  {
    name: "Adeola Johnson",
    role: "Patient",
    content:
      "The care I received at Michael Cross Specialists Hospital was exceptional. The staff treated me like family and the doctors were incredibly knowledgeable.",
    image:
      "/assets/images/mela.jpeg",
  },
  {
    name: "Dr. Chukwuma Eze",
    role: "Referring Physician",
    content:
      "I confidently refer my patients to Michael Cross Specialists Hospital. Their multidisciplinary approach and advanced facilities ensure the best outcomes.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ann James",
    role: "Family Member",
    content:
      "During my brother's treatment, the communication and support from the medical team gave our family peace of mind in a difficult time.",
    image:
      "/assets/images/vm.jpg",
  },
];

const Testimonials = () => {
  return (
    <MaxWidthWrapper className="paddingY ">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Patient Stories
        </h2>
        <div className="w-20 h-1 bg-app-blue rounded-full mx-auto" />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from those who have experienced our care firsthand
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-app-blue">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
