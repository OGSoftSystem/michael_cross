"use client";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import { FileText, User, Clock, CheckCircle2 } from "lucide-react";
import { Form } from "./ui/form";
import {
  CustomInput,
  CustomRichTextArea,
  CustomSelect,
  CustomTextarea,
  ImageUploadInput,
} from "./customs";
import { BlogFormDataType, blogSchema } from "@/lib/validations";
import { toast } from "sonner";
import { createBlogPost, updateBlogPost } from "@/lib/actions/news.actions";
import { NewsType } from "@/types";
import Image from "next/image";
import { cloudinaryImageUrl } from "@/env";
import { useRouter } from "next/navigation";

const categories = [
  "General",
  "Technology",
  "Health",
  "Business",
  "Lifestyle",
  "Education",
  "Entertainment",
  "Food",
];

type FormType = {
  type: "Create" | "Update";
  news?: NewsType;
};

const NewsForm = ({ type, news }: FormType) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const initial = news
    ? { ...news }
    : {
        title: "",
        excerpt: "",
        content: "",
        image: "",
        author: "Hospital Team",
        category: "General",
        readTime: "",
        slug: "",
      };

  const form = useForm<BlogFormDataType>({
    defaultValues: initial,
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (data: BlogFormDataType) => {
    try {
      if (type === "Create") {
        const res = await createBlogPost(data);
        if (res?.error) {
          toast.error(`Failed to create blog post: ${res.error}`);
          return;
        }
        toast.success("Blog post has been created successfully!");
        setIsSubmitted(true);
      } else {
        // Run update function
        const id = news?._id as string;
        const res = await updateBlogPost(id, data);
        if (res?.error) {
          toast.error(`Failed to update blog post: ${res.error}`);
          return;
        }
        toast.success("Blog post has been updated successfully!");
        router.replace("/dashboard/creator/news/view");
      }
    } catch (error) {
      console.error("Blog creation error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  if (form.formState.isSubmitted && isSubmitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
        <MaxWidthWrapper className="paddingY">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Blog Post Created Successfully!
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Your blog post has been published and is now live on the
                website. You can view it or create another post.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What&apos;s Next?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Your post is now visible to all visitors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>
                      You can edit this post anytime from the dashboard
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Readers can now engage with your content</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard/creator/news/view">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                    View Blog Posts
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="px-8 py-6"
                >
                  Create Another Post
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FieldGroup>
          <FieldSet>
            {/* Basic Information */}
            <FieldGroup className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="size-6 text-blue-600" />
                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Basic Information
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Core blog post details
                  </FieldDescription>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <CustomInput
                  name="title"
                  control={form.control}
                  label="Blog Title"
                  isRequired
                  placeholder="Enter an engaging title for your blog post"
                />

                <CustomTextarea
                  name="excerpt"
                  control={form.control}
                  label="Excerpt"
                  isRequired
                  rows={2}
                />
                {/* <CustomTextarea
                  name="content"
                  control={form.control}
                  label="Content"
                  isRequired
                  rows={5}
                /> */}

                <div>
                  <CustomRichTextArea
                    name="content"
                    control={form.control}
                    label="Content"
                    isRequired
                  />
                </div>

                <CustomInput
                  name="slug"
                  control={form.control}
                  label="Slug"
                  isRequired
                  placeholder="url-friendly-slug"
                />

                <ImageUploadInput
                  control={form.control}
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                  isRequired
                  name="image"
                  label="Upload Image"
                />
                {news && (
                  <div>
                    <p className="p-text">{news.image}</p>
                    <Image
                      src={`${cloudinaryImageUrl}${news.image}`}
                      alt="banner"
                      width={400}
                      height={200}
                    />
                  </div>
                )}
                {/* <CustomInput
                  name="image"
                  isRequired
                  control={form.control}
                  label="Featured Image URL"
                  placeholder="https://example.com/image.jpg"
                /> */}
              </div>
            </FieldGroup>
          </FieldSet>

          {/* Author & Category */}
          <FieldSet>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <User className="size-6 text-blue-600" />
                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Author & Category
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Post classification and authorship
                  </FieldDescription>
                </div>
              </div>

              <FieldGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomInput
                    name="author"
                    control={form.control}
                    label="Author Name"
                    // isRequired
                    placeholder="Enter author's full name"
                  />

                  <CustomSelect
                    name="category"
                    control={form.control}
                    isRequired
                    label="Category"
                    items={categories.map((category) => ({
                      id: category,
                      value: category,
                    }))}
                  />
                </div>
              </FieldGroup>
            </div>
          </FieldSet>

          {/* Additional Information */}
          <FieldSet>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="size-6 text-blue-600" />
                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Additional Information
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Optional post details
                  </FieldDescription>
                </div>
              </div>

              <FieldGroup>
                <div className="grid grid-cols-1 gap-6">
                  <CustomInput
                    name="readTime"
                    control={form.control}
                    label="Estimated Read Time"
                    placeholder="e.g., 5 min read"
                  />
                </div>
              </FieldGroup>
            </div>
          </FieldSet>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={cn(
              "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold",
              "py-6 rounded-xl text-lg transition-all duration-300",
              "hover:scale-105 hover:shadow-lg",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            )}
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Publishing Post...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>
                  {type === "Create" ? "Publish News" : "Update News"}
                </span>
              </div>
            )}
          </Button>
        </FieldGroup>
      </form>
    </Form>
  );
};

export default NewsForm;
