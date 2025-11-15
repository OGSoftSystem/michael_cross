import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";
import { Suspense } from "react";
import LeadershipCard from "@/components/ui/leadership-card";
import { getLeaders } from "@/lib/DAL";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { LeadershipCardType } from "@/types";

export const metadata: Metadata = {
  title: "Leadership",
};
// const leadershipTeam = [
//   {
//     id: 1,
//     name: "Dr. Michael Cross",
//     position: "Founder & Chief Executive Officer",
//     department: "Executive Leadership",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     qualifications: [
//       "MD, Harvard Medical School",
//       "MBA, Wharton School of Business",
//       "Fellow, Royal College of Physicians",
//       "Board Certified in Internal Medicine",
//     ],
//     about:
//       "With over 25 years of experience in healthcare leadership, Dr. Cross founded Michael Cross Specialist Hospital with a vision to revolutionize healthcare in Nigeria. His commitment to clinical excellence and patient-centered care has driven our growth across 14 states.",
//     experience: "25+ years",
//     email: "m.cross@michaelcrosshospital.org",
//     phone: "+234 800 642 4235",
//   },
//   {
//     id: 2,
//     name: "Dr. Adebayo Johnson",
//     position: "Chief Medical Director",
//     department: "Medical Administration",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     qualifications: [
//       "MD, University of Lagos College of Medicine",
//       "MSc Healthcare Management, London School of Economics",
//       "Fellow, West African College of Physicians",
//       "Certified Medical Director",
//     ],
//     about:
//       "Dr. Johnson oversees all clinical operations across our 51 facilities. His innovative approaches to healthcare delivery have significantly improved patient outcomes and operational efficiency throughout our network.",
//     experience: "20+ years",
//     email: "a.johnson@michaelcrosshospital.org",
//     phone: "+234 800 642 4236",
//   },
//   {
//     id: 4,
//     name: "Dr. Ibrahim Mohammed",
//     position: "Chief of Surgery",
//     department: "Surgical Services",
//     image:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     qualifications: [
//       "MBBS, Ahmadu Bello University",
//       "FRCS, Royal College of Surgeons of England",
//       "Fellow, International College of Surgeons",
//       "Advanced Trauma Life Support Certified",
//     ],
//     about:
//       "With expertise in minimally invasive surgical techniques, Dr. Mohammed has transformed our surgical services. He leads a team of 200+ surgeons across our network, ensuring the highest standards of surgical care.",
//     experience: "22+ years",
//     email: "i.mohammed@michaelcrosshospital.org",
//     phone: "+234 800 642 4238",
//   },
// ];

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5 relative">
      {/* Leadership Grid */}
      <Link href={"/dashboard/admin/leadership/new"}>
        <PlusCircle className="size-10 text-app-blue absolute left-20 bottom-10" />
      </Link>
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
            <RenderLeaders />
          </div>
        </Suspense>
      </MaxWidthWrapper>
    </div>
  );
};

export default LeadershipPage;

async function RenderLeaders() {
  'use cache'
  const leaders = await getLeaders();

  if (!leaders.length) {
    return <p className="p-text">No leader to show</p>;
  }

  return leaders.map((leader: LeadershipCardType) => (
    <LeadershipCard leader={leader} isDasboardMode key={leader.name} />
  ));
}
