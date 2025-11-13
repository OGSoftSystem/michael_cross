import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import LeadershipCard from "@/components/ui/leadership-card";
import { getLeaders } from "@/lib/DAL";
import { Suspense } from "react";
import { LeadershipCardType } from "@/types";

export const metadata: Metadata = {
  title: "Leadership",
};

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

        <Suspense fallback={<p>Loading...</p>}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* {leadershipTeam.map((leader) => (
              <LeadershipCard
                leader={leader}
                isDasboardMode={false}
                key={leader.name}
              />
            ))} */}
            <RenderLeaders />
          </div>
        </Suspense>

        {/* Stats Section */}
        {/* <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Specialist Doctors" },
              { number: "100+", label: "Nursing Staff" },
              { number: "1", label: "Hospital Location" },
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
        </div> */}

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
                "border-white text-app-blue hover:bg-white hover:text-app-blue",
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

async function RenderLeaders() {
  const leaders = await getLeaders();

  if (!leaders.length) {
    return <p className="p-text">No leader to show</p>;
  }

  return leaders
    .filter((l: LeadershipCardType) => !l.isMuted)
    .map((leader: LeadershipCardType) => (
      <LeadershipCard
        leader={leader}
        isDasboardMode={false}
        key={leader.name}
      />
    ));
}
