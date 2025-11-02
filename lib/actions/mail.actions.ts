"use server";

import { mail } from "@/env";
import { sendEmail } from "../mail/nodemailer";
import { handleErrors } from "../utils";
import { AppointmentFormDataType } from "../validations";
import { appointmentEmailTemplate } from "../mail/template";

export async function bookAppointment(data: AppointmentFormDataType) {
  const options = {
    from: data.email,
    to: mail.auth.user,
    subject: data.reason,
    text: `${data.firstName} ${data.lastName} with email: ${data.email} 
    booked and appointment with doctor: ${data.doctor}, 
    department: ${data.department} 
    for date: ${data.preferredDate}, time: ${data.preferredTime}.
    Below are other details:
    DOB: ${data.dateOfBirth},
    Gender: ${data.gender},
    Phone: ${data.phone},
    Preffered Location: ${data.location},
    Reason: ${data.reason},
    Symptoms: ${data.symptoms},
    HMO: ${data.insuranceProvider},
    HMO ID: ${data.insuranceNumber},
    `,
    html: appointmentEmailTemplate(data),
  };
  try {
    await sendEmail(options);
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
