// lib/actions/blog.actions.ts
"use server";

import { connectToDatabase } from "@/database";
import News from "@/database/models/new.model";
import { BlogFormDataType, blogSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { handleErrors } from "../utils";

export async function createBlogPost(data: BlogFormDataType) {
  try {
    const parsed = blogSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.message);
    }
    await connectToDatabase();

    const existingPost = await News.findOne({ slug: parsed.data.slug });
    if (existingPost) {
      throw new Error("A blog post with this slug already exists");
    }

    const newPost = await News.create({ ...parsed.data });

    if (newPost) {
      console.log(newPost);

      revalidatePath("/news");
    }
  } catch (error) {
    console.error("News creation error:", error);
    return {
      error:
        handleErrors(error) || "Failed to create blog post. Please try again.",
    };
  }
}

export async function updateBlogPost(id: string, data: BlogFormDataType) {
  try {
    await connectToDatabase();

    const post = await News.findOneAndUpdate(
      { id },
      {
        ...data,
      },
      { new: true }
    );

    if (post) {
      revalidatePath("/news");
      revalidatePath(`/news/${data.slug}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Blog update error:", error);
    return { error: handleErrors(error) || "Failed to update blog post" };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await connectToDatabase();

    const news = await News.findOneAndDelete({ _id: id });

    if (news) revalidatePath("/news");

    return { success: true };
  } catch (error) {
    console.error("Blog deletion error:", error);
    return { error: handleErrors(error) || "Failed to delete blog post" };
  }
}

export async function getBlogPosts() {
  // Simulate database fetch
  await connectToDatabase();

  const news = await News.find();

  return JSON.parse(JSON.stringify(news));
}

export async function getNewsPost(slug: string) {
  await connectToDatabase();

  const news = await News.findOne({ slug });

  return JSON.parse(JSON.stringify(news));
}

export async function publishNews(slug: string, isPublished: boolean) {
  try {
    await connectToDatabase();

    await News.updateOne(
      { slug },
      {
        $set: {
          isPublished,
        },
      }
    );
    // revalidateTag("news", { expire: 60 * 60 * 24 * 7 });
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
