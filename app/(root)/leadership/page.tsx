import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone, Award } from "lucide-react";

const leadershipTeam = [
  {
    id: 1,
    name: "Dr. Michael Cross",
    position: "Founder & Chief Executive Officer",
    department: "Executive Leadership",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, Harvard Medical School",
      "MBA, Wharton School of Business",
      "Fellow, Royal College of Physicians",
      "Board Certified in Internal Medicine",
    ],
    about:
      "With over 25 years of experience in healthcare leadership, Dr. Cross founded Michael Cross Specialist Hospital with a vision to revolutionize healthcare in Nigeria. His commitment to clinical excellence and patient-centered care has driven our growth across 14 states.",
    experience: "25+ years",
    email: "m.cross@michaelcrosshospital.org",
    phone: "+234 800 642 4235",
  },
  {
    id: 2,
    name: "Dr. Adebayo Johnson",
    position: "Chief Medical Director",
    department: "Medical Administration",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, University of Lagos College of Medicine",
      "MSc Healthcare Management, London School of Economics",
      "Fellow, West African College of Physicians",
      "Certified Medical Director",
    ],
    about:
      "Dr. Johnson oversees all clinical operations across our 51 facilities. His innovative approaches to healthcare delivery have significantly improved patient outcomes and operational efficiency throughout our network.",
    experience: "20+ years",
    email: "a.johnson@michaelcrosshospital.org",
    phone: "+234 800 642 4236",
  },
  {
    id: 3,
    name: "Dr. Chinyere Okoro",
    position: "Head of Cardiology",
    department: "Cardiology",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, University of Ibadan",
      "DM Cardiology, All India Institute of Medical Sciences",
      "Fellow, American College of Cardiology",
      "Board Certified Cardiologist",
    ],
    about:
      "Dr. Okoro leads our nationally recognized cardiology department, pioneering advanced cardiac procedures in Nigeria. Under her leadership, we've performed over 5,000 successful cardiac interventions.",
    experience: "18+ years",
    email: "c.okoro@michaelcrosshospital.org",
    phone: "+234 800 642 4237",
  },
  {
    id: 4,
    name: "Dr. Ibrahim Mohammed",
    position: "Chief of Surgery",
    department: "Surgical Services",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MBBS, Ahmadu Bello University",
      "FRCS, Royal College of Surgeons of England",
      "Fellow, International College of Surgeons",
      "Advanced Trauma Life Support Certified",
    ],
    about:
      "With expertise in minimally invasive surgical techniques, Dr. Mohammed has transformed our surgical services. He leads a team of 200+ surgeons across our network, ensuring the highest standards of surgical care.",
    experience: "22+ years",
    email: "i.mohammed@michaelcrosshospital.org",
    phone: "+234 800 642 4238",
  },
  {
    id: 5,
    name: "Dr. Funmi Adebayo",
    position: "Head of Pediatrics",
    department: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, Obafemi Awolowo University",
      "Fellow, American Academy of Pediatrics",
      "Diploma in Child Health, Royal College of Pediatrics",
      "Neonatal Resuscitation Program Certified",
    ],
    about:
      "Dr. Adebayo is passionate about child healthcare and has established our pediatric department as a center of excellence. She introduced family-centered care models that have been adopted nationwide.",
    experience: "16+ years",
    email: "f.adebayo@michaelcrosshospital.org",
    phone: "+234 800 642 4239",
  },
  {
    id: 6,
    name: "Dr. Ngozi Eze",
    position: "Head of Oncology",
    department: "Oncology",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, University of Nigeria",
      "PhD Oncology, Johns Hopkins University",
      "Fellow, European Society for Medical Oncology",
      "Board Certified Radiation Oncologist",
    ],
    about:
      "Dr. Eze leads our comprehensive cancer care program, integrating the latest research with compassionate patient care. She has been instrumental in establishing our regional cancer treatment centers.",
    experience: "19+ years",
    email: "n.eze@michaelcrosshospital.org",
    phone: "+234 800 642 4240",
  },
  {
    id: 7,
    name: "Dr. Bola Williams",
    position: "Chief Nursing Officer",
    department: "Nursing Services",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "BSN, University of Lagos",
      "MSN Nursing Administration, University of Pennsylvania",
      "Doctor of Nursing Practice, Johns Hopkins University",
      "Certified Nurse Executive",
    ],
    about:
      "Dr. Williams oversees our team of 15,000 nurses, ensuring the highest standards of nursing care. Her leadership in nursing education and professional development has set new benchmarks in Nigeria.",
    experience: "24+ years",
    email: "b.williams@michaelcrosshospital.org",
    phone: "+234 800 642 4241",
  },
  {
    id: 8,
    name: "Dr. Tunde Okafor",
    position: "Head of Emergency Medicine",
    department: "Emergency Services",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    qualifications: [
      "MD, University of Benin",
      "Fellow, American College of Emergency Physicians",
      "Advanced Cardiac Life Support Certified",
      "Pediatric Advanced Life Support Certified",
    ],
    about:
      "Dr. Okafor has revolutionized emergency care across our network, implementing standardized protocols that have reduced emergency response times by 40% and significantly improved patient outcomes.",
    experience: "17+ years",
    email: "t.okafor@michaelcrosshospital.org",
    phone: "+234 800 642 4242",
  },
];

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-20">
        <MaxWidthWrapper className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our Page Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Meet the exceptional healthcare professionals dedicated to providing
            world-class medical care across Nigeria
          </p>
        </MaxWidthWrapper>
      </section>

      {/* Leadership Grid */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Executive Leadership & Department Heads
          </h2>
          <div className="w-20 h-1.5 bg-app-blue rounded-full mx-auto" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of board-certified specialists and healthcare leaders
            brings decades of experience and innovation to patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {leadershipTeam.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-app-blue/90 font-semibold">
                    {leader.position}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">
                      {leader.experience} experience
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Department Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-app-blue/10 border border-app-blue/20">
                  <span className="text-sm font-semibold text-app-blue">
                    {leader.department}
                  </span>
                </div>

                {/* Qualifications */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    Qualifications
                  </h4>
                  <ul className="space-y-1">
                    {leader.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-app-blue rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-gray-600 leading-relaxed">
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About Section */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    About
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {leader.about}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-app-blue" />
                    <span className="text-gray-600">{leader.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-app-blue" />
                    <span className="text-gray-600">{leader.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Specialist Doctors" },
              { number: "15,000+", label: "Nursing Staff" },
              { number: "51", label: "Hospital Locations" },
              { number: "98%", label: "Patient Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-app-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-linear-to-r from-app-blue to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Medical Team
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Are you a healthcare professional passionate about making a
            difference? Explore career opportunities with Michael Cross
            Specialist Hospital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className={cn(
                "bg-white text-app-blue hover:bg-gray-100 font-semibold",
                "px-8 py-6 rounded-full transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]"
              )}
            >
              View Career Opportunities
            </Button>
            <Button
              variant="outline"
              className={cn(
                "border-white text-white hover:bg-white hover:text-app-blue",
                "px-8 py-6 rounded-full font-semibold transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]"
              )}
            >
              Contact HR Department
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LeadershipPage;
