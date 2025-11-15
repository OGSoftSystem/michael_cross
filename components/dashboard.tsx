import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import { Shield, User, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserRoles } from "@/database/models/user.model";
import Link from "next/link";

const DashboardLanding = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) return;

  const userRole = session.user.role;

  console.log(userRole);

  const roles = [
    {
      id: "admin",
      title: "Admin",
      description:
        "Full system access with user management, analytics, and platform configuration capabilities.",
      icon: Shield,
      features: [
        "User Management & Permissions",
        "System Analytics & Reports",
        "Platform Configuration",
        "Billing & Subscription Management",
        "Security & Audit Logs",
      ],
      path: "/dashboard/admin",
      color: "app-blue",
    },
    {
      id: "creator",
      title: "Creator",
      description:
        "Create, manage, and analyze your content with powerful tools designed for content creators.",
      icon: User,
      features: [
        "Content Creation & Management",
        "Audience Analytics",
        "Content Scheduling",
        "Performance Insights",
        "Collaboration Tools",
      ],
      path: "/dashboard/creator",
      color: "purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Header */}
      <MaxWidthWrapper className="paddingY">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-app-blue rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-app-blue">Dashboard</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your role to access the dedicated dashboard with tools and
            features tailored to your needs.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div
          id="dashboard-cards"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto transition-all duration-300 bg-app-blue/5 p-6 rounded-2xl"
        >
          {userRole === UserRoles.CREATOR
            ? roles.slice(1).map((role) => (
                <div key={role.id}>
                  <RoleCard
                    title={role.title}
                    description={role.description}
                    icon={role.icon}
                    features={role.features}
                    path={role.path}
                  />
                </div>
              ))
            : roles.map((role) => (
                <div key={role.id}>
                  <RoleCard
                    title={role.title}
                    description={role.description}
                    icon={role.icon}
                    features={role.features}
                    path={role.path}
                  />
                </div>
              ))}
        </div>
      </MaxWidthWrapper>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-app-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default DashboardLanding;

const RoleCard = ({
  title,
  description,
  icon: Icon,
  features,
  path,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  path: string;
}) => {
  return (
    <Link
      href={path}
      className={cn(
        "group relative bg-white rounded-3xl shadow-xl",
        "transition-all duration-500 cursor-pointer overflow-hidden",
        "hover:shadow-2xl hover:scale-105 hover:bg-app-blue/20 hover:border-app-blue/20",
        "active:scale-95",
        "hover:border-ring-4 border ring-app-blue/20 shadow-2xl scale-105"
      )}
    >
      {/* Background linear Effect */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br from-transparent to-app-blue/5 opacity-0",
          "group-hover:opacity-100 transition-opacity duration-500"
        )}
      />

      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Section */}
        <div
          className={cn(
            "w-20 h-20 rounded-2xl mb-6 flex items-center justify-center",
            "transition-all duration-500 group-hover:scale-110",
            title === "Admin"
              ? "bg-blue-100 text-app-blue"
              : "bg-purple-100 text-purple-600"
          )}
        >
          <Icon className="w-10 h-10" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Features List */}
        <div className="space-y-3 mb-8 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle2
                className={cn(
                  "size-5 shrink-0",
                  title === "Admin" ? "text-app-blue" : "text-purple-500"
                )}
              />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "font-semibold transition-all duration-300",
              title === "Admin" ? "text-app-blue" : "text-purple-600",
              "group-hover:translate-x-2"
            )}
          >
            Enter Dashboard
          </span>
          <ArrowRight
            className={cn(
              "w-5 h-5 transition-all duration-300",
              title === "Admin" ? "text-app-blue" : "text-purple-600",
              "group-hover:translate-x-1"
            )}
          />
        </div>
      </div>

      {/* Hover Border Effect */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-0 h-1 transition-all duration-500",
          title === "Admin" ? "bg-app-blue" : "bg-purple-500",
          "group-hover:w-full"
        )}
      />
    </Link>
  );
};
