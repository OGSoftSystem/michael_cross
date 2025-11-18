import HeaderBanner from "@/components/header-banner";
import { UserRoles } from "@/database/models/user.model";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Users,
  TrendingUp,
  UserPlus,
  Mail,
  Shield,
  MessageSquare,
} from "lucide-react";
import { getEmails, getUsers } from "@/lib/DAL";
import { UserType } from "@/context/auth";
import { Suspense } from "react";
import { EmailType } from "@/components/email-newsletter-columns";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

async function fetchUsers() {
  "use cache";

  const data = (await getUsers()) as {
    users: UserType[];
    usersLength: number;
  };
  return data;
}

async function fetchEmails() {
  "use cache";

  const emails = (await getEmails()) as {
    emails: EmailType[];
    emailsLength: number;
  };
  return emails;
}
const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== UserRoles.ADMIN) redirect("/dashboard");

  const { usersLength } = await fetchUsers();
  const { emailsLength } = await fetchEmails();

  const adminActions = [
    {
      title: "User Management",
      description: "Manage user accounts, permissions, and access levels",
      href: "/dashboard/admin/users",
      icon: Users,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      stats: "Active Users",
    },
    {
      title: "Leadership",
      description: "Create and manage leadership members.",
      href: "/dashboard/admin/leadership",
      icon: TrendingUp,
      color: "green",
      gradient: "from-green-500 to-green-600",
      stats: "Leaders",
    },
    {
      title: "Create User",
      description: "Add new users and set up their accounts",
      href: "/auth/sign-up",
      icon: UserPlus,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      stats: "Add Team Members",
    },
    {
      title: "Newsletters",
      description: "Manage news letter subscribers' emails",
      href: "/dashboard/admin/news-letters",
      icon: Mail,
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
      stats: "Subscribers",
    },
    // {
    //   title: "Analytics",
    //   description: "View platform analytics and performance reports",
    //   href: "/dashboard/admin/analytics",
    //   icon: BarChart3,
    //   color: "indigo",
    //   gradient: "from-indigo-500 to-indigo-600",
    //   stats: "Platform Insights",
    // },
    // {
    //   title: "System Settings",
    //   description: "Configure platform settings and preferences",
    //   href: "/dashboard/admin/settings",
    //   icon: Settings,
    //   color: "gray",
    //   gradient: "from-gray-500 to-gray-600",
    //   stats: "Configuration",
    // },
  ];

  return (
    <Suspense>
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
        {/* Background Decorations */}
        <div className="fixed top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <section className="relative overflow-hidden rounded-3xl py-16 shadow-2xl">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <HeaderBanner
                  title="Admin Dashboard"
                  description="Complete control center for platform administration and management"
                  // className="text-white"
                />

                {/* Admin Badge */}
                <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-medium">
                    Administrator Access
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {usersLength}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
              </div>
            </div>
          </div> */}

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Newsletters</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {emailsLength}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminActions.map((action) => (
              <AdminActionCard key={action.title} action={action} />
            ))}
          </div>

          {/* Recent Activity Section */}
          {/* <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Activity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "New Signups", value: "12", change: "+2" },
              { label: "Newsletters Sent", value: "8", change: "+1" },
              { label: "Active Sessions", value: "342", change: "+15" },
              { label: "System Health", value: "100%", change: "0" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-gray-50/50 rounded-2xl"
              >
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-green-600 font-medium">
                  {stat.change} from yesterday
                </p>
              </div>
            ))}
          </div>
        </div> */}
        </div>
      </div>
    </Suspense>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminActionCard = ({ action }: { action: any }) => {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 active:scale-95"
    >
      {/* Gradient Background Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${action.gradient}`}
      />

      <div className="relative p-6 h-full flex flex-col">
        {/* Icon with Gradient Background */}
        <div
          className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-linear-to-br ${action.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
          {action.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
          {action.description}
        </p>

        {/* Stats Badge */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
            {action.stats}
          </span>

          {/* Animated Arrow */}
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <div className="w-4 h-4 bg-linear-to-r from-gray-400 to-gray-600 mask mask-arrow-right group-hover:from-gray-600 group-hover:to-gray-800 transition-all" />
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${action.gradient} pointer-events-none`}
      />
    </Link>
  );
};

export default AdminPage;
