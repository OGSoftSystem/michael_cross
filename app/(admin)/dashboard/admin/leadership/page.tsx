import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";
import { Suspense } from "react";
import LeadershipCard from "@/components/ui/leadership-card";
import { getLeaders } from "@/lib/DAL";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { LeadershipCardType } from "@/types";
import { CusTooltip } from "@/components/tooltip";

export const metadata: Metadata = {
  title: "Leadership",
};

const LeadershipPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5 relative">
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

        <Link
          href={"/dashboard/admin/leadership/new"}
          className="my-8 flex items-center justify-center"
        >
          <CusTooltip title="Add Leader" Icon={PlusCircle} className="size-10 text-app-blue">
            <PlusCircle className="size-4 text-white" />
          </CusTooltip>
        </Link>

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
  "use cache";

  const leaders = await getLeaders();

  // console.log(leaders);
  


  if (!leaders.length) {
    return <p className="p-text">No leader to show</p>;
  }

  return leaders.map((leader: LeadershipCardType) => (
    <LeadershipCard leader={leader} isDasboardMode key={leader.name} />
  ));
}
