"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  Video,
  User,
  Phone,
  Mail,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

// Zod validation schema
const appointmentSchema = z.object({
  // Patient Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Please select your date of birth"),
  gender: z.string().min(1, "Please select your gender"),

  // Appointment Details
  appointmentType: z.string(),
  preferredDate: z.string().min(1, "Please select preferred date"),
  preferredTime: z.string().min(1, "Please select preferred time"),
  department: z.string().min(1, "Please select department"),
  doctor: z.string().min(1, "Please select doctor"),
  location: z.string().min(1, "Please select location"),

  // Medical Information
  reason: z
    .string()
    .min(10, "Please describe your reason for visit (at least 10 characters)"),
  symptoms: z.string().optional(),
  insuranceProvider: z.string().optional(),
  insuranceNumber: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const departments = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Neurology",
  "Oncology",
  "Gynecology",
  "Urology",
  "ENT",
  "Dental",
  "Emergency Care",
];

const doctors = [
  "Dr. Adebayo Johnson - Cardiology",
  "Dr. Funmi Adebayo - Pediatrics",
  "Dr. Ibrahim Mohammed - Orthopedics",
  "Dr. Ngozi Eze - Dermatology",
  "Dr. Tunde Okafor - Emergency Medicine",
  "Any Available Doctor",
];

const locations = [
  "Lagos Main Branch - Victoria Island",
  "Abuja Specialist Center - Central District",
  "Port Harcourt Center - GRA",
  "Kano Regional Hospital",
  "Ibadan Specialist Center",
  "Telemedicine (Virtual)",
];

const timeSlots = [
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

const Appointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<"physical" | "telemedicine">(
    "physical"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    setValue,
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    mode: "onChange",
  });

  //   const appointmentType = watch("appointmentType");

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Appointment booked:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
        <MaxWidthWrapper className="paddingY">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Appointment Booked Successfully!
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Thank you for choosing Michael Cross Specialist Hospital.
                We&apos;ve received your appointment request and will contact
                you shortly to confirm your booking.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">
                  What&apos;s Next?
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-app-blue" />
                    <span>
                      We&apos;ll call you within 2 hours to confirm your
                      appointment
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-app-blue" />
                    <span>
                      You&apos;ll receive an email confirmation with appointment
                      details
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-4 h-4 text-app-blue" />
                    <span>
                      Please arrive 15 minutes early for your appointment
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-app-blue hover:bg-app-blue/90 text-white px-8 py-6">
                    Return to Home
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-6"
                >
                  Book Another Appointment
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Header */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-16">
        <MaxWidthWrapper>
          <div className="text-center space-y-6">
            <Link href="/" className="inline-block">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Schedule your visit with our specialist doctors. Choose between
              physical consultation or telemedicine.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Type Selection */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Appointment Type
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Physical Appointment */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType("physical");
                    setValue("appointmentType", "physical");
                  }}
                  className={cn(
                    "p-6 rounded-2xl border-2 transition-all duration-300 text-left",
                    "hover:scale-105 hover:shadow-lg",
                    selectedType === "physical"
                      ? "border-app-blue bg-app-blue/5"
                      : "border-gray-200 bg-white hover:border-app-blue/50"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        selectedType === "physical"
                          ? "bg-app-blue"
                          : "bg-gray-100"
                      )}
                    >
                      <Stethoscope
                        className={cn(
                          "w-6 h-6",
                          selectedType === "physical"
                            ? "text-white"
                            : "text-gray-600"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Physical Consultation
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Visit our hospital for in-person examination
                      </p>
                    </div>
                  </div>
                </button>

                {/* Telemedicine */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType("telemedicine");
                    setValue("appointmentType", "telemedicine");
                  }}
                  className={cn(
                    "p-6 rounded-2xl border-2 transition-all duration-300 text-left",
                    "hover:scale-105 hover:shadow-lg",
                    selectedType === "telemedicine"
                      ? "border-app-blue bg-app-blue/5"
                      : "border-gray-200 bg-white hover:border-app-blue/50"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        selectedType === "telemedicine"
                          ? "bg-app-blue"
                          : "bg-gray-100"
                      )}
                    >
                      <Video
                        className={cn(
                          "w-6 h-6",
                          selectedType === "telemedicine"
                            ? "text-white"
                            : "text-gray-600"
                        )}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Telemedicine
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Virtual consultation from your home
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {errors.appointmentType && (
                <p className="text-red-600 text-sm flex items-center space-x-1 mt-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.appointmentType.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Patient Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <User className="w-6 h-6 text-app-blue" />
                  <span>Patient Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={cn(
                        errors.firstName &&
                          "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={cn(
                        errors.lastName && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(
                        errors.email && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

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
                      {...register("phone")}
                      className={cn(
                        errors.phone && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="dateOfBirth"
                      className="text-sm font-medium text-gray-700"
                    >
                      Date of Birth *
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      {...register("dateOfBirth")}
                      className={cn(
                        errors.dateOfBirth &&
                          "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-600 text-sm">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="gender"
                      className="text-sm font-medium text-gray-700"
                    >
                      Gender *
                    </Label>
                    <select
                      id="gender"
                      {...register("gender")}
                      className={cn(
                        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-app-blue focus:ring-2 focus:ring-app-blue/20",
                        errors.gender && "border-red-500 focus:border-red-500"
                      )}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-600 text-sm">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-app-blue" />
                  <span>Appointment Details</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredDate"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("preferredDate")}
                      className={cn(
                        errors.preferredDate &&
                          "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.preferredDate && (
                      <p className="text-red-600 text-sm">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredTime"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Time *
                    </Label>
                    <select
                      id="preferredTime"
                      {...register("preferredTime")}
                      className={cn(
                        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-app-blue focus:ring-2 focus:ring-app-blue/20",
                        errors.preferredTime &&
                          "border-red-500 focus:border-red-500"
                      )}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="text-red-600 text-sm">
                        {errors.preferredTime.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="department"
                      className="text-sm font-medium text-gray-700"
                    >
                      Department *
                    </Label>
                    <select
                      id="department"
                      {...register("department")}
                      className={cn(
                        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-app-blue focus:ring-2 focus:ring-app-blue/20",
                        errors.department &&
                          "border-red-500 focus:border-red-500"
                      )}
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-600 text-sm">
                        {errors.department.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="doctor"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Doctor *
                    </Label>
                    <select
                      id="doctor"
                      {...register("doctor")}
                      className={cn(
                        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-app-blue focus:ring-2 focus:ring-app-blue/20",
                        errors.doctor && "border-red-500 focus:border-red-500"
                      )}
                    >
                      <option value="">Select Doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                    </select>
                    {errors.doctor && (
                      <p className="text-red-600 text-sm">
                        {errors.doctor.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label
                      htmlFor="location"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Location *
                    </Label>
                    <select
                      id="location"
                      {...register("location")}
                      className={cn(
                        "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-app-blue focus:ring-2 focus:ring-app-blue/20",
                        errors.location && "border-red-500 focus:border-red-500"
                      )}
                    >
                      <option value="">Select Location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="text-red-600 text-sm">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                  <Stethoscope className="w-6 h-6 text-app-blue" />
                  <span>Medical Information</span>
                </h2>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="reason"
                      className="text-sm font-medium text-gray-700"
                    >
                      Reason for Visit *
                    </Label>
                    <Textarea
                      id="reason"
                      rows={4}
                      placeholder="Please describe your symptoms or reason for scheduling this appointment..."
                      {...register("reason")}
                      className={cn(
                        errors.reason && "border-red-500 focus:border-red-500"
                      )}
                    />
                    {errors.reason && (
                      <p className="text-red-600 text-sm">
                        {errors.reason.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="symptoms"
                      className="text-sm font-medium text-gray-700"
                    >
                      Additional Symptoms (Optional)
                    </Label>
                    <Textarea
                      id="symptoms"
                      rows={3}
                      placeholder="List any other symptoms you're experiencing..."
                      {...register("symptoms")}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="insuranceProvider"
                        className="text-sm font-medium text-gray-700"
                      >
                        Insurance Provider (Optional)
                      </Label>
                      <Input
                        id="insuranceProvider"
                        {...register("insuranceProvider")}
                        placeholder="e.g., NHIS, Hygeia HMO"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="insuranceNumber"
                        className="text-sm font-medium text-gray-700"
                      >
                        Insurance Number (Optional)
                      </Label>
                      <Input
                        id="insuranceNumber"
                        {...register("insuranceNumber")}
                        placeholder="Your insurance policy number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                  "py-6 rounded-xl text-lg transition-all duration-300",
                  "hover:scale-105 hover:shadow-lg",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Booking Appointment...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-red-900">Medical Emergency?</h3>
                  <p className="text-red-700 text-sm mt-1">
                    Don&apos;t wait for an appointment. Visit the nearest
                    emergency room immediately.
                  </p>
                  <p className="text-red-900 font-semibold mt-2">
                    Emergency Line: (234) 800-MICHAEL
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Need Help Booking?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-app-blue" />
                  <span className="text-gray-600">(234) 800-642-4235</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-app-blue" />
                  <span className="text-gray-600">
                    appointments@michaelcrosshospital.org
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-4 h-4 text-app-blue" />
                  <span className="text-gray-600">
                    Mon-Sun: 7:00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-app-blue text-white rounded-2xl p-6">
              <h3 className="font-bold mb-4">What to Expect</h3>
              <div className="space-y-3 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirmation call within 2 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Bring valid ID and insurance card</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Arrive 15 minutes early</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cancel 24 hours in advance if needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Appointment;
