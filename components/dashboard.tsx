"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Shield,
  User,
  ArrowRight,
  Settings,
  Users,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const RoleCard = ({
  title,
  description,
  icon: Icon,
  features,
  onClick,
  isHovered,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  onClick: () => void;
  isHovered: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative bg-white rounded-3xl shadow-xl border-2 border-transparent",
        "transition-all duration-500 cursor-pointer overflow-hidden",
        "hover:shadow-2xl hover:scale-105 hover:border-app-blue/20",
        "active:scale-95",
        isHovered && "ring-4 ring-app-blue/20 shadow-2xl scale-105"
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
    </div>
  );
};

const DashboardLanding = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
      path: "/admin/dashboard",
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
      path: "/creator/dashboard",
      color: "purple-600",
    },
  ];

  const handleRoleSelect = (path: string) => {
    // Add a smooth transition before navigation
    const element = document.getElementById("dashboard-cards");
    element?.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
      router.push(path);
    }, 300);
  };

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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-300"
        >
          {roles.map((role) => (
            <div
              key={role.id}
              onMouseEnter={() => setHoveredCard(role.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <RoleCard
                title={role.title}
                description={role.description}
                icon={role.icon}
                features={role.features}
                onClick={() => handleRoleSelect(role.path)}
                isHovered={hoveredCard === role.id}
              />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Need help choosing?</span>
            </div>
            <p className="text-gray-600 mb-6">
              Contact your system administrator if you need access to multiple
              roles or have questions about permissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="px-6 py-3">
                <Users className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button className="bg-app-blue hover:bg-app-blue/90 px-6 py-3">
                <FileText className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-app-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
};

export default DashboardLanding;
