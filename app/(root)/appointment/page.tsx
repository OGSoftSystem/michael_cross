import AppointmentForm from "@/components/appointment-form";
import { Metadata } from "next";
import {
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";

export const metadata: Metadata = {
  title: "Appointments",
};
const AppointmentPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-app-blue/5">
      {/* Header */}
      <section className="bg-linear-to-r from-app-blue to-blue-700 text-white py-16">
        <MaxWidthWrapper>
          <div className="text-center space-y-6">
            <Link  href="/" className="inline-block">
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
          {/* Main Form */}
          <div className="lg:col-span-2">
            {/* FORM */}

            <AppointmentForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
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
                    Emergency Line: {siteConfig.phone}
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
                  <span className="text-gray-600">{siteConfig.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-app-blue" />
                  <span className="text-gray-600">
                   {siteConfig.email}
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
          </aside>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AppointmentPage;
