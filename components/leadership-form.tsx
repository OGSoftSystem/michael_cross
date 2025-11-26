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
import { FileText, User, CheckCircle2 } from "lucide-react";
import { Form } from "./ui/form";
import { CustomInput, CustomRichTextArea, ImageUploadInput } from "./customs";
import { LeadershipFormDataType, leadershipSchema } from "@/lib/validations";
import { toast } from "sonner";

import { LeadershipFormType } from "@/types";
import Image from "next/image";
import { cloudinaryImageUrl } from "@/env";
import { useRouter } from "next/navigation";
import { createLeader, updateLeader } from "@/lib/actions/leadership.actions";

type FormType = {
  type: "Create" | "Update";
  leader?: LeadershipFormType;
};

const LeadershipForm = ({ type, leader }: FormType) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const initial = leader
    ? { ...leader }
    : {
        name: "",
        position: "",
        department: "",
        image: "",
        qualifications: "",
        about: "",
        experience: "",
        email: "",
        phone: "",
      };

  const form = useForm<LeadershipFormDataType>({
    defaultValues: initial,
    resolver: zodResolver(leadershipSchema),
  });

  if (type === "Update" && leader?.qualifications) {
    const l = Array.from(leader.qualifications)
      .map((i) => i)
      .join("-");

    form.setValue("qualifications", l);
  }

  const onSubmit = async (data: LeadershipFormDataType) => {
    try {
      if (type === "Create") {
        const res = await createLeader(data);
        if (res?.error) {
          toast.error(`Failed to create blog post: ${res.error}`);
          return;
        }
        toast.success("Leader been created successfully!");
        setIsSubmitted(true);
      } else {
        // Run update function
        const name = leader?.name as string;
        const res = await updateLeader(name, data);
        if (res?.error) {
          toast.error(`Failed to update blog post: ${res.error}`);
          return;
        }
        toast.success("Leader been updated successfully!");
        router.replace("/dashboard/admin/leadership");
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
                Leader Created Successfully!
              </h1>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What&apos;s Next?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Enable leader to make them visible on the page</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard/admin/leadership">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 cusor-pointer">
                    View Leader
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="px-8 py-6 cursor-pointer"
                >
                  Create Another Leader
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
                  name="name"
                  control={form.control}
                  label="Name"
                  isRequired
                  placeholder="Enter name"
                />

                <CustomInput
                  name="position"
                  control={form.control}
                  label="Postion"
                  placeholder="position"
                  isRequired={false}
                />
                <CustomInput
                  name="department"
                  control={form.control}
                  label="Department"
                  placeholder="Enter your department"
                  isRequired={false}
                />
                <CustomInput
                  name="qualifications"
                  control={form.control}
                  label="Qualifications"
                  placeholder="e.g MD, UI Medical School-MBA, RUST School of Business. seperate with -"
                  isRequired={false}
                />

                <div>
                  <CustomRichTextArea
                    name="about"
                    control={form.control}
                    label="About"
                    isRequired
                  />
                </div>

                <CustomInput
                  name="experience"
                  control={form.control}
                  label="Experience"
                  isRequired={false}
                  placeholder="Enter your experience"
                />
                <CustomInput
                  name="email"
                  control={form.control}
                  label="Email"
                  isRequired={false}
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomInput
                  name="phone"
                  control={form.control}
                  label="Phone"
                  isRequired={false}
                  placeholder="Enter your phone number"
                />

                <ImageUploadInput
                  control={form.control}
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                  isRequired
                  name="image"
                  label="Upload Image"
                />
                {leader && (
                  <div>
                    <p className="p-text">{leader.image}</p>
                    <Image
                      src={`${cloudinaryImageUrl}${leader.image}`}
                      alt="banner"
                      width={400}
                      height={200}
                    />
                  </div>
                )}
              </div>
            </FieldGroup>
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
                <span>Creating Leader...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{type === "Create" ? "Create" : "Update"}</span>
              </div>
            )}
          </Button>
        </FieldGroup>
      </form>
    </Form>
  );
};

export default LeadershipForm;
