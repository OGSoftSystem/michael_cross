import { UserRoles } from "@/database/models/user.model";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};
const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== UserRoles.ADMIN) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to Admin&apos;s Page
          </h1>
          <p className="text-gray-600">Handle Administrative Tasks</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Link
            href={"/auth/sign-up"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sign Up
            </h2>
          </Link>
          <Link
            href={"/dashboard/admin/leadership"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Leadership
            </h2>
          </Link>

          {/* View News Section */}
          <Link
            href={"/dashboard/admin/users"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Users</h2>
            {/* <ViewNews /> */}
            read
          </Link>
          <Link
            href={"/dashboard/admin/news-letters"}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              New Letter
            </h2>
            {/* <ViewNews /> */}
            read
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
