import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, Users, Award, Heart, Shield, Star } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Michael Cross Sepecialists Hospital",
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
          alt="Modern hospital interior with medical professionals"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <MaxWidthWrapper className="relative h-full flex items-center justify-center text-center">
          <div className="text-white space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About Michael Cross
              <span className="text-app-blue block">specialists Hospital</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              For over two decades, we&apos;ve been transforming healthcare
              through innovation, compassion, and excellence.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Mission & Vision */}
      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Commitment to
                <span className="text-app-blue"> Exceptional Care</span>
              </h2>
              <div className="w-24 h-1.5 bg-app-blue rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Michael Cross Specialists Hospital stands as a beacon of hope
                and healing in the heart of Abuja. From our advanced facility,
                we are dedicated to providing world-class, specialist healthcare
                to the community, serving as a trusted destination for
                comprehensive medical needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of highly-skilled specialists and dedicated healthcare
                professionals works tirelessly to ensure every patient receives
                personalized, compassionate care, backed by cutting-edge medical
                technology and a commitment to clinical excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-app-blue mb-2">24+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-app-blue mb-2">
                  300+
                </div>
                <div className="text-sm text-gray-600">
                  Patients Served Annually
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-app-blue mb-2">98%</div>
                <div className="text-sm text-gray-600">
                  Patient Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-app-blue mb-2">1</div>
                <div className="text-sm text-gray-600">Care Location</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Medical team discussing patient care"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-app-blue/10 rounded-full -z-10" />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Our Values */}
      <section className="bg-gray-50 paddingY">
        <MaxWidthWrapper>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-app-blue rounded-full mx-auto" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description:
                  "Treating every patient with empathy, dignity, and respect as if they were family.",
              },
              {
                icon: Award,
                title: "Clinical Excellence",
                description:
                  "Maintaining the highest standards of medical practice and continuous improvement.",
              },
              {
                icon: Users,
                title: "Patient-Centered",
                description:
                  "Putting patients at the heart of every decision and treatment plan.",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Ensuring the highest levels of patient safety and quality care.",
              },
              {
                icon: Star,
                title: "Innovation",
                description:
                  "Embracing new technologies and treatments to improve patient outcomes.",
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                description:
                  "Upholding ethical standards and transparency in all our operations.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-app-blue rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Leadership Story */}
      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Hospital founder"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/surg.jpg"
                    alt="Medical team collaboration"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                    alt="Hospital facility"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Advanced medical equipment"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Journey of
                <span className="text-app-blue"> Healing</span>
              </h2>
              <div className="w-24 h-1.5 bg-app-blue rounded-full" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 1999 by Dr. Michael Cross, our hospital began as a
                single facility with a simple mission: to provide exceptional
                healthcare that transforms lives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we&apos;ve grown into Nigeria&apos;s fifth largest health
                system, but our core commitment remains unchanged. Every
                decision we make, every technology we adopt, and every
                professional we hire is guided by our founding principle:
                patient care comes first.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through the Michael Cross specialists Foundation, we extend our
                mission beyond our hospital walls, supporting community health
                initiatives and making quality care accessible to all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={"/leadership"}
                className={cn(
                  "bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                  "px-8 py-6 rounded-full transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg",
                  "min-w-[200px]",
                  buttonVariants({
                    variant: "default",
                    className: "rounded-full bg-app-blue py-6",
                  })
                )}
              >
                Meet Our Leadership
              </Link>
              {/* <Button
                variant="outline"
                className={cn(
                  "border-app-blue text-app-blue hover:bg-app-blue hover:text-white",
                  "px-8 py-6 rounded-full font-semibold transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg",
                  "min-w-[200px]"
                )}
              >
                Our Foundation
              </Button> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Accreditation & Awards */}
      <section className="bg-app-blue text-white paddingY">
        <MaxWidthWrapper>
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Recognition & Accreditation
            </h2>
            <div className="w-20 h-1 bg-white rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              "Nigerian Medical Association",
              "International Healthcare Accreditation",
              "Quality Healthcare Award 2023",
              "Patient Safety Excellence",
            ].map((accreditation, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <Award className="w-12 h-12 mx-auto mb-3 text-white/80" />
                <h3 className="font-semibold text-lg">{accreditation}</h3>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Experience
            <span className="text-app-blue"> Exceptional Care?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join the millions of patients who trust Michael Cross specialists
            Hospital with their health and wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href={"/appointment"}
              className={cn(
                " hover:bg-app-blue/90 text-white font-semibold",
                "px-8 py-6  text-lg transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]",
                buttonVariants({
                  variant: "default",
                  className: "rounded-full bg-app-blue py-6",
                })
              )}
            >
              Book Appointment
            </Link>
            <Link
              href={"/locations"}
              className={cn(
                "border-app-blue text-app-blue hover:bg-app-blue hover:text-white",
                "px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                "min-w-[200px]",
                buttonVariants({
                  variant: "ghost",
                  className: "rounded-full py-6",
                })
              )}
            >
              Find a Location
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
