// components/creator/ViewNews.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cloudinaryImageUrl } from "@/env";
import { NewsType } from "@/types";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  isPublished: boolean;
  banner: string;
  views: number;
  likes: number;
}

const ViewNews = ({ data }: { data: NewsType[] }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  // Mock data with banner images
  useEffect(() => {
    (function load() {
      setIsLoading(true);
    })();
  }, [data]);

  const filteredNews = news.filter(
    (item) => filter === "all" || item.category === filter
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      technology: "bg-blue-100 text-blue-800 border-blue-200",
      business: "bg-green-100 text-green-800 border-green-200",
      health: "bg-red-100 text-red-800 border-red-200",
      entertainment: "bg-purple-100 text-purple-800 border-purple-200",
      sports: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this news article?")) {
      console.log("Delete news:", id);
      // TODO: Implement delete functionality
      setNews((prev) => prev.filter((item) => item.id !== id));
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="paddingY">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 my-10">
        <Button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All News
        </Button>
        {["technology", "business", "health", "entertainment", "sports"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                filter === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredNews.length} of {news.length} news articles
        {filter !== "all" && ` in ${filter}`}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <p className="text-gray-500 text-lg">No news articles found.</p>
            <p className="text-gray-400">
              Try changing your filter or create a new article.
            </p>
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Banner Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <Image
                  src={`${cloudinaryImageUrl}${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.isPublished
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                    }`}
                  >
                    {item.isPublished ? "Published" : "Draft"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 leading-tight">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.content ?? "content"}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  {/* <div className="flex items-center space-x-4">
                    {item.isPublished && (
                      <>
                        <span className="flex items-center">
                          👁️ {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          ❤️ {item.likes.toLocaleString()}
                        </span>
                      </>
                    )}
                  </div> */}
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  {/* <button
                    onClick={() => handleView(item.id)}
                    className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>👁️</span>
                    View
                  </button> */}
                  <Link
                    href={`/dashboard/creator/news/${item.slug}/edit`}
                    className="flex-1 bg-green-50 text-green-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>✏️</span>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.slug)}
                    className="flex-1 bg-red-50 text-red-600 py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>🗑️</span>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default ViewNews;
