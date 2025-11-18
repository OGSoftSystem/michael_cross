import HeaderBanner from "@/components/header-banner";
import { UserRoles } from "@/database/models/user.model";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Eye, PenTool, Sparkles } from "lucide-react";

const CreatorPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  const canAcess = [UserRoles.ADMIN, UserRoles.CREATOR];
  if (
    !session ||
    !canAcess.some((u: string) => u.includes(session.user.role))
  ) {
    redirect("/");
  }

  const creatorActions = [
    {
      title: "Create News",
      description: "Craft engaging news content with rich media and formatting",
      href: "/dashboard/creator/news/new",
      icon: Plus,
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      action: "Start Creating",
    },
    {
      title: "View News",
      description: "Manage, edit, and analyze your published news content",
      href: "/dashboard/creator/news/view",
      icon: Eye,
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      action: "Browse Content",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-emerald-50/20 to-blue-50/30">
      {/* Background Decorations */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <section className="relative overflow-hidden rounded-3xl py-20 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <PenTool className="w-10 h-10 text-white" />
                </div>
              </div>

              <HeaderBanner
                title="Creator Studio"
                description="Craft and manage compelling news content for your audience"
              />

              {/* Creator Badge */}
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white/90 text-sm font-medium">
                  Content Creator Access
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Content Creation Hub */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Management Hub
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your workflow - create new engaging content or manage your
              existing publications
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {creatorActions.map((action) => (
              <CreatorActionCard
                key={action.title}
                action={action}
              />
            ))}
          </div>

          {/* Stats Preview */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PenTool className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">24</p>
                <p className="text-sm text-gray-600">Draft Articles</p>
              </div>

              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">156</p>
                <p className="text-sm text-gray-600">Published News</p>
              </div>

              <div className="p-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">98%</p>
                <p className="text-sm text-gray-600">Engagement Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CreatorActionCard = ({
  action,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any;
}) => {
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

      <div className="relative p-8 h-full flex flex-col">
        {/* Icon with Gradient Background */}
        <div
          className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-linear-to-br ${action.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-7 h-7" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
          {action.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed flex-1">
          {action.description}
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 px-4 py-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
            {action.action}
          </span>

          {/* Animated Arrow */}
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <div
              className={`w-5 h-5 bg-linear-to-r ${action.gradient} mask mask-arrow-right group-hover:scale-110 transition-transform`}
            />
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${action.gradient} pointer-events-none`}
      />

      {/* Subtle Corner Accent */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-bl ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-3xl`}
      />
    </Link>
  );
};

export default CreatorPage;
