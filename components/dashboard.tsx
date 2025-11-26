import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import {
  Shield,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Settings,
  Zap,
} from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserRoles } from "@/database/models/user.model";
import Link from "next/link";

const DashboardLanding = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) return;

  const userRole = session.user.role;

  const roles = [
    {
      id: "admin",
      title: "Administrator",
      description:
        "Full system access with comprehensive control over users and others.",
      icon: Shield,
      features: [
        "User Management & Permissions",
        // "System Analytics & Reports",
        // "Platform Configuration",
        // "Billing & Subscription Management",
        // "Security & Audit Logs",
      ],
      path: "/dashboard/admin",
      color: "blue",
      badge: "Full Access",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "creator",
      title: "Content Creator",
      description: "Powerful tools to create and manage your content .",
      icon: User,
      features: [
        "Content Creation & Management",
        // "Audience Analytics",
        // "Content Scheduling",
        // "Performance Insights",
        // "Collaboration Tools",
      ],
      path: "/dashboard/creator",
      color: "purple",
      badge: "Creator Access",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50/50">
      {/* Header */}
      <MaxWidthWrapper className="py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-app-blue rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-linear-to-r from-blue-600 to-app-blue bg-clip-text">
              Dashboard
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your role to access the dedicated dashboard with tools and
            features tailored to your needs.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {userRole === UserRoles.CREATOR
            ? roles.slice(1).map((role) => (
                <div key={role.id} className="flex justify-center">
                  <RoleCard role={role} />
                </div>
              ))
            : roles.map((role) => (
                <div key={role.id} className="flex justify-center">
                  <RoleCard role={role} />
                </div>
              ))}
        </div>
      </MaxWidthWrapper>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default DashboardLanding;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RoleCard = ({ role }: { role: any }) => {
  return (
    <Link
      href={role.path}
      className={cn(
        "group relative w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-100",
        "transition-all duration-500 cursor-pointer overflow-hidden",
        "hover:shadow-2xl hover:-translate-y-2",
        "active:scale-95"
      )}
    >
      {/* Gradient Background on Hover */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br opacity-0 transition-opacity duration-500",
          role.gradient,
          "group-hover:opacity-5"
        )}
      />

      {/* Badge */}
      <div className="absolute top-6 right-6">
        <div
          className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm",
            role.color === "blue"
              ? "bg-blue-500/10 text-blue-600 border border-blue-500/20"
              : "bg-purple-500/10 text-purple-600 border border-purple-500/20"
          )}
        >
          {role.badge}
        </div>
      </div>

      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Section */}
        <div
          className={cn(
            "w-16 h-16 rounded-2xl mb-6 flex items-center justify-center relative",
            "transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
            role.color === "blue"
              ? "bg-blue-500/10 text-blue-600"
              : "bg-purple-500/10 text-purple-600"
          )}
        >
          <role.icon className="w-8 h-8" />
          {/* Icon Background Effect */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
              role.gradient,
              "group-hover:opacity-10"
            )}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            {role.title}
            {role.color === "blue" && (
              <Settings className="w-5 h-5 text-blue-500" />
            )}
            {role.color === "purple" && (
              <Zap className="w-5 h-5 text-purple-500" />
            )}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {role.description}
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {role.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="flex items-center space-x-3 group/feature"
              >
                <div className="relative">
                  <CheckCircle2
                    className={cn(
                      "w-5 h-5 shrink-0 transition-all duration-300",
                      role.color === "blue"
                        ? "text-blue-500 group-hover/feature:text-blue-600"
                        : "text-purple-500 group-hover/feature:text-purple-600"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
                      role.gradient,
                      "group-hover/feature:opacity-20"
                    )}
                  />
                </div>
                <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div
          className={cn(
            "flex items-center justify-between p-4 -mx-4 -mb-4 rounded-2xl",
            "transition-all duration-300 group-hover:bg-gray-50/50"
          )}
        >
          <span
            className={cn(
              "font-semibold transition-all duration-300",
              role.color === "blue" ? "text-blue-600" : "text-purple-600",
              "group-hover:translate-x-2"
            )}
          >
            Enter Dashboard
          </span>
          <div className="relative">
            <ArrowRight
              className={cn(
                "w-5 h-5 transition-all duration-300",
                role.color === "blue" ? "text-blue-600" : "text-purple-600",
                "group-hover:translate-x-1"
              )}
            />
            {/* Arrow Background Effect */}
            <div
              className={cn(
                "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
                role.gradient,
                "group-hover:opacity-10 -inset-2"
              )}
            />
          </div>
        </div>
      </div>

      {/* Border Gradient Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl border-2 opacity-0 transition-opacity duration-500",
          role.gradient,
          "group-hover:opacity-30"
        )}
      />
    </Link>
  );
};
