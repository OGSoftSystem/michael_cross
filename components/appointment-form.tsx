"use client";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  // FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import { Form } from "./ui/form";
import { CustomInput, CustomSelect, CustomTextarea } from "./customs";
import { AppointmentFormDataType, appointmentSchema } from "@/lib/validations";
import { bookAppointment } from "@/lib/actions/mail.actions";
import { toast } from "sonner";

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

const AppointmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",

    preferredDate: "",
    preferredTime: "",
    department: "",
    doctor: "",
    location: "",

    // Medical Information
    reason: "",
    symptoms: "",
    insuranceProvider: "",
    insuranceNumber: "",
  };

  const form = useForm<AppointmentFormDataType>({
    defaultValues: initial,
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormDataType) => {
    try {
      const res = await bookAppointment(data);
      if (res?.error) {
        toast.error(`Failed to create appointment: ${res.error}`);
      }
      toast.success("Appointment has been created.");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      form.reset();
    }
  };

  if (form.formState.isSubmitted && isSubmitted) {
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
                Thank you for choosing Michael Cross Specialists Hospital.
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FieldGroup>
          <FieldSet>
            {/* Patient Information */}
            <FieldGroup className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center space-x-3">
                <User className="size-6 text-app-blue" />

                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Patient Information
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Personal data
                  </FieldDescription>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CustomInput
                  name="firstName"
                  control={form.control}
                  label="First Name"
                  isRequired
                />
                <CustomInput
                  name="lastName"
                  control={form.control}
                  label="First Name"
                  isRequired
                />
                <CustomInput
                  name="email"
                  control={form.control}
                  label="Email Address"
                  isRequired
                  type="email"
                />
                <CustomInput
                  name="phone"
                  control={form.control}
                  label="Phone"
                  isRequired
                />
                <CustomInput
                  name="dateOfBirth"
                  control={form.control}
                  label="Date of birth"
                  isRequired
                  type="date"
                />
                <CustomSelect
                  name="gender"
                  control={form.control}
                  label="Gender"
                  isRequired
                  items={[
                    { id: "male", value: "Male" },
                    { id: "female", value: "Female" },
                  ]}
                />
              </div>
            </FieldGroup>
          </FieldSet>

          {/* Appointment Details */}
          <FieldSet>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-app-blue" />
                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Appointment Details
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Appointment data
                  </FieldDescription>
                </div>
              </div>

              <FieldGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomInput
                    name="preferredDate"
                    control={form.control}
                    label="Preferred Date"
                    isRequired
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                  />

                  <CustomInput
                    name="preferredTime"
                    control={form.control}
                    label="Preferred Time"
                    isRequired
                    type="time"
                  />

                  <CustomSelect
                    name="department"
                    control={form.control}
                    label="Department"
                    isRequired
                    items={departments.map((d) => ({
                      id: d,
                      value: d,
                    }))}
                  />
                  <CustomSelect
                    name="doctor"
                    control={form.control}
                    label="Preferred Doctor"
                    isRequired
                    items={doctors.map((d) => ({
                      id: d,
                      value: d,
                    }))}
                  />
                  <CustomSelect
                    name="location"
                    control={form.control}
                    label="Preferred Location"
                    isRequired
                    items={locations.map((d) => ({
                      id: d,
                      value: d,
                    }))}
                  />
                </div>
              </FieldGroup>
            </div>
          </FieldSet>

          {/* Medical Information */}

          <FieldSet>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Stethoscope className="size-6 text-app-blue" />
                <div>
                  <FieldLegend className="font-bold text-accent-foreground">
                    Medical Information
                  </FieldLegend>
                  <FieldDescription className="text-xs text-muted-foreground">
                    Medical data
                  </FieldDescription>
                </div>
              </div>

              <FieldGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomTextarea
                    name="reason"
                    control={form.control}
                    label="Reason for visit"
                    isRequired
                    rows={4}
                  />
                  <CustomTextarea
                    name="symptoms"
                    control={form.control}
                    label="Additional Symptoms (Optional)"
                    rows={4}
                  />

                  <CustomInput
                    name="insuranceProvider"
                    control={form.control}
                    label="HMO Company (Optional)"
                    type="text"
                  />
                  <CustomInput
                    name="insuranceNumber"
                    control={form.control}
                    label="HMO ID (Optional)"
                    type="text"
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
              "w-full bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
              "py-6 rounded-xl text-lg transition-all duration-300",
              "hover:scale-105 hover:shadow-lg",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            )}
          >
            {form.formState.isSubmitting ? (
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
        </FieldGroup>
      </form>
    </Form>
  );
};

export default AppointmentForm;
