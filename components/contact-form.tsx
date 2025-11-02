"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { CheckCircle2, Send } from "lucide-react";
import { Form } from "./ui/form";
import { ContactFormData, contactFormSchema } from "@/lib/validations";
import { FieldGroup, FieldLegend, FieldSet } from "./ui/field";
import { CustomInput, CustomSelect, CustomTextarea } from "./customs";
import { contactUs } from "@/lib/actions/contact.actions";
import { toast } from "sonner";

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

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initial = {
    fullName: "",
    phone: "",
    email: "",
    state: "",
    message: "",
    subject: "",
  };

  const form = useForm({
    defaultValues: initial,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await contactUs(data);
      if (res?.error) {
        toast.error(res.error);
      }

      toast.success("Message sent successfully");
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-green-800 font-medium">
                Thank you for your message!
              </p>
              <p className="text-green-700 text-sm">
                We&apos;ve received your inquiry and will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <FieldLegend className="font-bold text-accent-foreground">
                  Contact Information
                </FieldLegend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomInput
                    name="fullName"
                    control={form.control}
                    label="Full Name"
                    isRequired
                  />
                  <CustomInput
                    name="phone"
                    control={form.control}
                    label="Phone Number"
                    isRequired
                  />
                  <CustomInput
                    name="email"
                    control={form.control}
                    label="Email Address"
                    isRequired
                  />
                  <CustomSelect
                    name="state"
                    control={form.control}
                    label="State"
                    isRequired
                    items={nigerianStates.map((s) => ({
                      id: s,
                      value: s,
                    }))}
                  />
                </div>
                <CustomInput
                  name="subject"
                  control={form.control}
                  label="Subject"
                  isRequired
                />

                <CustomTextarea
                  name="message"
                  control={form.control}
                  label="Message"
                  isRequired
                  rows={4}
                />
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Button
                  type="submit"
                  disabled={isSubmitting || form.formState.isSubmitting}
                  className={cn(
                    "w-full bg-app-blue hover:bg-app-blue/90 text-white font-semibold",
                    "py-6 rounded-lg text-lg transition-all duration-300",
                    "hover:scale-105 hover:shadow-lg",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  )}
                >
                  {isSubmitting || form.formState.isSubmitting ? (
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
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
