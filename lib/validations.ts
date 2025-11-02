import z from "zod";

// Zod validation schema
export const appointmentSchema = z.object({
  // Patient Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Please select your date of birth"),
  gender: z.string().min(1, "Please select your gender"),

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

export type AppointmentFormDataType = z.infer<typeof appointmentSchema>;
 