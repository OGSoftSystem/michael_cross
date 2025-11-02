import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};
// Blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Advancements in Cardiac Care: New Heart Treatment Options",
    excerpt:
      "Discover the latest innovations in cardiology that are revolutionizing heart disease treatment across our hospitals.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Adebayo Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Cardiology",
    slug: "advancements-in-cardiac-care",
  },
  {
    id: 2,
    title: "Pediatric Health: Keeping Our Children Safe and Healthy",
    excerpt:
      "Essential tips and insights for parents on maintaining children's health through different developmental stages.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Funmi Adebayo",
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Pediatrics",
    slug: "pediatric-health-tips",
  },
  {
    id: 3,
    title: "Understanding Minimally Invasive Surgery Techniques",
    excerpt:
      "How advanced surgical methods are reducing recovery times and improving patient outcomes in modern healthcare.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Ibrahim Mohammed",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Surgery",
    slug: "minimally-invasive-surgery",
  },
  {
    id: 4,
    title: "Mental Health Awareness: Breaking the Stigma in Healthcare",
    excerpt:
      "The importance of mental health care and how we're integrating psychological support into our medical services.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Ngozi Eze",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Mental Health",
    slug: "mental-health-awareness",
  },
  {
    id: 5,
    title: "Emergency Preparedness: What to Do in Medical Emergencies",
    excerpt:
      "A comprehensive guide on handling common medical emergencies before professional help arrives.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    author: "Dr. Tunde Okafor",
    date: "2024-01-02",
    readTime: "8 min read",
    category: "Emergency Care",
    slug: "emergency-preparedness-guide",
  },
];

const categories = [
  "All",
  "Cardiology",
  "Pediatrics",
  "Surgery",
  "Mental Health",
  "Emergency Care",
  "Preventive Care",
  "Research",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Medical research and healthcare education"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <MaxWidthWrapper className="relative h-full flex items-center justify-center text-center">
          <div className="text-white space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Health Insights &
              <span className="text-app-blue block">Medical Updates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Stay informed with the latest medical research, health tips, and
              updates from our team of specialists
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        {/* Categories Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              className={cn(
                "px-6 py-3 rounded-full border-2 transition-all duration-200 font-semibold",
                category === "All"
                  ? "bg-app-blue text-white border-app-blue"
                  : "bg-white text-gray-700 border-gray-200 hover:border-app-blue hover:text-app-blue"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-app-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-app-blue transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-app-blue" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>

                  <Link href={`/news/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-app-blue hover:text-app-blue/80 hover:bg-app-blue/10 p-0 font-semibold group/btn"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-linear-to-r from-app-blue to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Medical Insights
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest health tips,
            medical research, and hospital updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-app-blue hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
