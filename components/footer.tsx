"use client";

import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/utils";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

import { siteConfig } from "@/config";

import EmailSubscriptionForm from "./email-sub-form";
import { Suspense } from "react";
import { CurrentYear } from "./current-year";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Leadership", href: "/leadership" },
      { name: "News & Media", href: "/news" },
      // { name: "Careers", href: "/careers" },
      // { name: "Patient Stories", href: "/stories" },
      // { name: "Quality & Safety", href: "/quality" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Accident and Emergency Care", href: "#emergency" },
      { name: "Obstetrics and Gynaecology", href: "#services" },
      { name: "Pediatrics", href: "#services" },
      { name: "Feetility Management", href: "#services" },
      { name: "General Surgery", href: "#services" },
      { name: "Dermatology", href: "#services" },
      // { name: "Maternity Care", href: "#services" },
      { name: "Internal Medicine", href: "#services" },
      { name: "Imaging and Radiology", href: "#services" },
      { name: "Laboratory / Diagnostics", href: "#services" },
    ],
  },
  {
    title: "For Patients",
    links: [
      { name: "Find a Doctor", href: "/doctors" },
      { name: "Book Appointment", href: "/appointment" },
      // { name: "Patient Portal", href: "/" },
      // { name: "Medical Records", href: "/" },
      // { name: "Billing & Insurance", href: "/" },
      // { name: "Visitor Information", href: "/" },
    ],
  },
  {
    title: "Location",
    links: [
      { name: "Abuja, Nigeria", href: "/locations/lagos" },
      // { name: "Abuja Specialist Center", href: "/locations/abuja" },
      // { name: "Port Harcourt", href: "/locations/ph" },
      // { name: "Kano Regional", href: "/locations/kano" },
      // { name: "Ibadan Center", href: "/locations/ibadan" },
      // { name: "View All Locations", href: "/locations" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Michael-Cross-Specialist-Hospital-ltd-61568523760799/",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://x.com",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/p/DB8gdybIRaz/",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:text-blue-700",
  },
];

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <MaxWidthWrapper className="paddingY">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="xl:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/logo.png"
                alt="Michael Cross Specialist Hospital"
                width={180}
                height={80}
                className="w-auto h-12"
              />
            </Link>

            <p className="text-gray-300 leading-relaxed max-w-md">
              {siteConfig.title} is dedicated to providing exceptional
              healthcare with compassion and innovation. With current location
              in Abuja, Nigeria, we&apos;re committed to building a healthier
              community.
            </p>

            {/* Contact Info */}
            <div className="space-y-3" id="footer/call">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-app-blue" />
                <span>Emergency: {siteConfig.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-app-blue" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-app-blue" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-app-blue" />
                <span>24/7 Emergency Services</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center",
                    "transition-all duration-300 hover:bg-app-blue",
                    social.color
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-lg text-white border-l-4 border-app-blue pl-3">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-app-blue transition-colors duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="capitalize">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 p-6 bg-app-blue/20 border border-app-blue/30 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">
                  Emergency Medical Services
                </h4>
                <p className="text-gray-300">
                  Available 24 hours, 7 days a week
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold text-white">
                {siteConfig.phone}
              </div>
              <p className="text-gray-300">Call immediately for emergencies</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 p-8 bg-gray-800 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Stay Informed</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for health tips, news, and updates
                from Michael Cross Specialists Hospital.
              </p>
            </div>
            <EmailSubscriptionForm />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <MaxWidthWrapper className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <Suspense>
              <div className="text-sm text-center md:text-left">
                © <CurrentYear /> {siteConfig.title}. All rights reserved.
              </div>
            </Suspense>

            <div className="text-sm">
              <Link
                href="https://ogsoftsolutions.com"
                target="_blank"
                className="hover:text-white transition-colors"
              >
                With ❤️ by OGSOFT Solutions Ltd.
              </Link>
              {/* <Link
                href="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link> */}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-green-400">●</span>NHIS Accredited
            </div>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
