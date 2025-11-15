import { CurrentYear } from "@/components/current-year";
import { siteConfig } from "@/config";
import { Suspense } from "react";

// app/privacy/page.tsx
const PrivacyPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Michael Cross Specialists Hospital - Protecting Your Health
            Information
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
          <p className="text-blue-800 font-medium">
            Last Updated: January 15, 2024
          </p>
        </div>

        {/* Privacy Content */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Michael Cross Specialists Hospital, we are committed to
              protecting the privacy and confidentiality of our patients&apos;
              personal and health information. This Privacy Policy outlines how
              we collect, use, disclose, and safeguard your information when you
              visit our hospital or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Full name, date of birth, and contact details</li>
                  <li>Government-issued identification numbers</li>
                  <li>Health insurance information</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Health Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Medical history and treatment records</li>
                  <li>Laboratory test results and diagnostic reports</li>
                  <li>Medication prescriptions and allergies</li>
                  <li>Insurance claims and billing information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Medical Purposes
                </h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Providing medical treatment and care</li>
                  <li>• Coordinating with healthcare providers</li>
                  <li>• Managing prescriptions and medications</li>
                  <li>• Scheduling appointments and follow-ups</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Administrative Purposes
                </h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Processing insurance claims</li>
                  <li>• Billing and payment processing</li>
                  <li>• Quality improvement programs</li>
                  <li>• Legal and regulatory compliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Information Sharing & Disclosure
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your information only in the following circumstances:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  With other healthcare providers involved in your treatment
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  With insurance companies for claim processing
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  When required by law or legal proceedings
                </p>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600">
                  For public health activities and research
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Data Security
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                We implement robust security measures to protect your
                information:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">🔒</span>
                  <span>Encrypted electronic medical records</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">👥</span>
                  <span>Limited access to authorized personnel only</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">📱</span>
                  <span>Secure data transmission protocols</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">🏥</span>
                  <span>Physical security for paper records</span>
                </div>
              </div>
            </div>
          </section>

          {/* Patient Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Your Rights
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-700">Right to Access</h3>
                <p className="text-gray-600 text-sm">
                  Request copies of your medical records
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-700">
                  Right to Correction
                </h3>
                <p className="text-gray-600 text-sm">
                  Request amendments to inaccurate information
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-700">
                  Right to Restrict
                </h3>
                <p className="text-gray-600 text-sm">
                  Limit how we use or disclose your information
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-semibold text-gray-700">
                  Right to Complain
                </h3>
                <p className="text-gray-600 text-sm">
                  File complaints about privacy violations
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Privacy Officer
                </h3>
                <p className="text-gray-600">Email: {siteConfig.email}</p>
                <p className="text-gray-600">Phone: {siteConfig.phone}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">
                  Hospital Address
                </h3>
                <p className="text-gray-600">
                  Michael Cross Specialists Hospital
                </p>
                <p className="text-gray-600">{siteConfig.location}</p>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Policy Updates
              </h3>
              <p className="text-yellow-700 text-sm">
                We may update this privacy policy periodically. Significant
                changes will be communicated through our website notices or
                direct communication with patients.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <Suspense>
            <p className="text-gray-500 text-sm">
              © <CurrentYear/> {siteConfig.title}. All rights reserved.
            </p>
          </Suspense>
          <p className="text-gray-400 text-xs mt-2">
            This privacy policy complies with the Nigerian Data Protection
            Regulation (NDPR) and international healthcare privacy standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
