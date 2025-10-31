import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Shield,
  Heart,
  Users,
  Clock,
  MapPin,
  Award,
  Star,
  Phone,
  Calendar,
} from "lucide-react";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-20">
        <MaxWidthWrapper className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Health Benefits
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover the comprehensive benefits and exceptional care that make
            Michael Cross Specialist Hospital your trusted healthcare partner
          </p>
        </MaxWidthWrapper>
      </section>

      {/* Why Choose Us */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Michael Cross Specialist Hospital?
          </h2>
          <div className="w-20 h-1.5 bg-app-blue rounded-full mx-auto" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing healthcare that puts you first,
            with benefits designed around your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Quality Assurance",
              description:
                "JCI accredited facilities with international standards of care",
            },
            {
              icon: Heart,
              title: "Patient-Centered Care",
              description:
                "Personalized treatment plans focused on your unique needs",
            },
            {
              icon: Users,
              title: "Expert Team",
              description:
                "Board-certified specialists with decades of experience",
            },
            {
              icon: Clock,
              title: "24/7 Access",
              description:
                "Round-the-clock emergency and critical care services",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-app-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Comprehensive Care Benefits */}
      <section className="bg-gray-50 paddingY">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Comprehensive Healthcare Benefits
                </h2>
                <div className="w-24 h-1.5 bg-app-blue rounded-full" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Michael Cross Specialist Hospital, we offer a wide range of
                  benefits designed to provide you with complete peace of mind
                  and exceptional healthcare experiences.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Access to 500+ specialist doctors across 14 states",
                  "State-of-the-art medical technology and equipment",
                  "Multi-disciplinary approach to complex medical cases",
                  "Seamless referral system between our 51 facilities",
                  "Electronic health records for coordinated care",
                  "Preventive health screenings and wellness programs",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-app-blue shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                  alt="Modern hospital facilities and technology"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-app-blue/10 rounded-full -z-10" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Insurance & Financial Benefits */}
      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-app-blue" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Insurance Partners
                  </h3>
                </div>
                <p className="text-gray-700">
                  We work with all major insurance providers to ensure your
                  healthcare is accessible and affordable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "NHIS",
                    "Hygeia HMO",
                    "AXA Mansard",
                    "Avon HMO",
                    "Reliance HMO",
                    "Clearline International",
                    "Mediplan",
                    "More...",
                  ].map((provider, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{provider}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Financial Peace of Mind
              </h2>
              <div className="w-24 h-1.5 bg-app-blue rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe quality healthcare should be accessible. Our
                financial benefits are designed to remove barriers to
                exceptional medical care.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Flexible Payment Plans",
                  description:
                    "Interest-free installment options for major procedures",
                },
                {
                  title: "Price Transparency",
                  description:
                    "No hidden costs with upfront treatment estimates",
                },
                {
                  title: "Corporate Health Plans",
                  description:
                    "Customized healthcare packages for organizations",
                },
                {
                  title: "Emergency Care Fund",
                  description:
                    "Financial assistance for critical emergency cases",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Patient Support Services */}
      <section className="bg-app-blue text-white paddingY">
        <MaxWidthWrapper>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Additional Support Services
            </h2>
            <div className="w-20 h-1 bg-white rounded-full mx-auto" />
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Beyond medical treatment, we provide comprehensive support for
              your overall wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Patient Navigation",
                description:
                  "Dedicated coordinators to guide you through your healthcare journey",
              },
              {
                icon: MapPin,
                title: "Transport Services",
                description:
                  "Ambulance and medical transport across all locations",
              },
              {
                icon: Clock,
                title: "Quick Access",
                description:
                  "Reduced waiting times with our efficient appointment system",
              },
              {
                icon: Award,
                title: "Wellness Programs",
                description: "Health education and preventive care workshops",
              },
              {
                icon: Star,
                title: "VIP Services",
                description:
                  "Executive health checks and personalized care packages",
              },
              {
                icon: Heart,
                title: "Counseling Services",
                description:
                  "Emotional and psychological support for patients and families",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Technology & Innovation */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Technology & Innovation Benefits
          </h2>
          <div className="w-20 h-1.5 bg-app-blue rounded-full mx-auto" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to enhance your healthcare
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Telemedicine Services",
              description:
                "Virtual consultations with specialists from the comfort of your home",
              features: [
                "Video Consultations",
                "E-Prescriptions",
                "Remote Monitoring",
              ],
            },
            {
              title: "Digital Health Records",
              description:
                "Secure electronic records accessible across all our facilities",
              features: ["24/7 Access", "Real-time Updates", "Secure Sharing"],
            },
            {
              title: "Mobile Health App",
              description:
                "Manage your health with our comprehensive patient portal",
              features: [
                "Appointment Booking",
                "Test Results",
                "Medication Reminders",
              ],
            },
            {
              title: "Advanced Diagnostics",
              description:
                "Latest imaging and laboratory technology for accurate diagnosis",
              features: [
                "AI-Assisted Analysis",
                "Rapid Results",
                "High Accuracy",
              ],
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-app-blue" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper className="paddingY">
        <div className="bg-linear-to-r from-app-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Experience Exceptional Healthcare?
            </h2>
            <p className="text-blue-100 text-lg">
              Join thousands of patients who trust Michael Cross Specialist
              Hospital with their health and wellbeing. Experience the benefits
              of comprehensive, compassionate care today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                className={cn(
                  "bg-white text-app-blue hover:bg-gray-100 font-semibold",
                  "px-8 py-6 rounded-full text-sm transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg",
                  "min-w-[200px]"
                )}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "border-white text-app-blue hover:bg-white hover:text-app-blue",
                  "px-8 py-6 rounded-full text-sm font-semibold transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg",
                  "min-w-[200px]"
                )}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (234) 800-MICHAEL
              </Button>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-blue-200 text-sm">
                🚨 Emergency services available 24/7 at all 51 locations
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Benefits;
