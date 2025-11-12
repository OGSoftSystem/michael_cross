"use client";

import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailFormDataType, emailSchema } from "@/lib/validations";
import { CustomInput } from "./customs";
import { useForm } from "react-hook-form";
import { subcribeToNewsLetter } from "@/lib/actions/email.actions";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { FieldGroup, FieldSet } from "./ui/field";

const EmailSubscriptionForm = () => {
  const form = useForm<EmailFormDataType>({
    defaultValues: { email: "" },
    resolver: zodResolver(emailSchema),
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(data: EmailFormDataType) {
    console.log("data", data);

    try {
      const res = await subcribeToNewsLetter(data);
      if (res?.error) {
        toast.error(res.error);
        return;
      }
      toast.success("Thank you for subscribing");
      form.reset();
    } catch (error) {
      throw error;
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex space-x-4 relative"
      >
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <CustomInput
                name="email"
                control={form.control}
                label="Email Address"
                // isRequired
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-app-blue"
              />
            </FieldGroup>
          </FieldSet>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "bg-app-blue hover:bg-app-blue/90 text-white cursor-pointer font-semibold px-2 sm:px-4 py-3 rounded-full transition-all duration-300 hover:scale-105 absolute right-0 bottom-0 text-xs sm:text-normal",
              form.formState.errors.email && "absolute top-8 right-0"
            )}
          >
            {isSubmitting ? "Wait..." : " Subscribe"}
          </Button>
        </FieldGroup>
      </form>
    </Form>
  );
};

export default EmailSubscriptionForm;
