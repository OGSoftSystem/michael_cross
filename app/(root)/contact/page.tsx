import ContactForm from "@/components/contact-form";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return <ContactForm />;
};

export default ContactPage;
