"use server";

import { mail } from "@/env";
import { sendEmail } from "../mail/nodemailer";
import { handleErrors } from "../utils";
import { ContactFormData } from "../validations";
import { contactTemplate } from "../mail/template";

export async function contactUs(data: ContactFormData) {
  const options = {
    from: data.email,
    to: mail.auth.user,
    subject:`Contact: ${data.subject}`,
    text: `${data.fullName} with email: ${data.email} 
    Below are other details:
    State: ${data.state},
    Phone: ${data.phone},
    Message: ${data.message},
    `,
    html: contactTemplate(data),
  };
  try {
    await sendEmail(options);
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
