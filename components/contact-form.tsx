"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),

  state: z.string().min(1, "Please select a state"),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address must be less than 200 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Federal Capital Territory",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const ContactForm= () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted successfully:", data);
      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/10">
      {/* Header Section */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-20">
        <MaxWidthWrapper className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            We&apos;re here to help and answer any questions you might have
          </p>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg">
                Reach out to us through any of these channels. Our team is ready
                to assist you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Emergency Line
                  </h3>
                  <p className="text-gray-600">(234) 800-MICHAEL</p>
                  <p className="text-sm text-gray-500">
                    24/7 Emergency Services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@michaelcrosshospital.org</p>
                  <p className="text-sm text-gray-500">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Main Location
                  </h3>
                  <p className="text-gray-600">
                    123 Medical Drive, Victoria Island
                  </p>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-app-blue rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-600">Weekends: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-red-900">Medical Emergency?</h3>
                  <p className="text-red-700 text-sm">
                    Call our emergency line immediately for urgent medical
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="space-y-2 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-medium">
                        Thank you for your message!
                      </p>
                      <p className="text-green-700 text-sm">
                        We&apos;ve received your inquiry and will contact you
                        shortly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="fullName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-app-blue focus:ring-2 focus:ring-app-blue/20 transition-all duration-200",
                        errors.fullName &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-sm flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.fullName.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-app-blue focus:ring-2 focus:ring-app-blue/20 transition-all duration-200",
                        errors.phone &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* State Selection */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="state"
                      className="text-sm font-medium text-gray-700"
                    >
                      State *
                    </Label>
                    <select
                      id="state"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-app-blue focus:ring-2 focus:ring-app-blue/20 transition-all duration-200 bg-white",
                        errors.state &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("state")}
                    >
                      <option value="">Select your state</option>
                      {nigerianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-600 text-sm flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.state.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-sm font-medium text-gray-700"
                    >
                      Address *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Enter your full address"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-app-blue focus:ring-2 focus:ring-app-blue/20 transition-all duration-200",
                        errors.address &&
                          "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                      {...register("address")}
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.address.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-app-blue focus:ring-2 focus:ring-app-blue/20 transition-all duration-200 resize-none",
                      errors.message &&
                        "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                    "py-6 rounded-lg text-lg transition-all duration-300",
                    "hover:scale-105 hover:shadow-lg",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactForm;
