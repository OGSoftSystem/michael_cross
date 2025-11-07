import { model, models, Schema } from "mongoose";

// id: 1,
//     title: "Advancements in Cardiac Care: New Heart Treatment Options",
//     excerpt:
//       "Discover the latest innovations in cardiology that are revolutionizing heart disease treatment across our hospitals.",
//     image:
//       "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//     author: "Dr. Adebayo Johnson",
//     date: "2024-01-15",
//     readTime: "5 min read",
//     category: "Cardiology",
//     slug: "advancements-in-cardiac-care",

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    excerpt: {
      type: String,
      required: [true, "email is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    author: {
      type: String,
      required: [true, "author is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
      default: "General",
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
    readTime: {
      type: String,
    },
    slug: {
      type: String,
      required: [true, "slug is required"],
    },
  },
  {
    timestamps: true,
  }
);

const News = models.News || model("News", newsSchema);

export default News;
