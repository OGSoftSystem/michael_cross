import HeaderBanner from "@/components/header-banner";
import { UserRoles } from "@/database/models/user.model";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const CreatorPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  const canAcess = [UserRoles.ADMIN, UserRoles.CREATOR];
  if (
    !session ||
    !canAcess.some((u: string) => u.includes(session.user.role))
  ) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <section className="bg-gray-200 py-20">
            <HeaderBanner
              title="Welcome to Creator's Page"
              description="Manage and create news content for your audience"
            />
          </section>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create News Section */}
          <Link
            href={"/dashboard/creator/news/new"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Create News
            </h2>
            {/* <CreateNews /> */}
            create
          </Link>

          {/* View News Section */}
          <Link
            href={"/dashboard/creator/news/view"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              View News
            </h2>
            {/* <ViewNews /> */}
            read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;
