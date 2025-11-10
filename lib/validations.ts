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

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),

  email: z.string().email({ message: "provide a valid email" }),
  state: z.string().min(1, "Please select a state"),
  subject: z.string().min(1, "Please enter subject"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Validation schema for sign-up form
export const signUpSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export type SignUpFormDataType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export type SignInFormDataType = z.infer<typeof signInSchema>;

export const blogSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(200, "Title must be less than 200 characters"),

  excerpt: z
    .string()
    .min(1, "Excerpt is required")
    .min(10, "Excerpt must be at least 10 characters")
    .max(300, "Excerpt must be less than 300 characters"),

  content: z
    .string()
    .min(1, "Content is required")
    .min(10, "Excerpt must be at least 10 characters"),
  image: z.string(),

  author: z
    .string()
    .min(1, "Author is required")
    .min(2, "Author name must be at least 2 characters")
    .max(100, "Author name must be less than 100 characters"),

  category: z
    .string()
    .min(1, "Category is required")
    .min(2, "Category must be at least 2 characters")
    .max(100, "Category must be less than 100 characters"),

  readTime: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || /^\d+\s*min(\s*read)?$/i.test(val), {
      message:
        "Please enter a valid read time format (e.g., '5 min read' or '10 min')",
    }),

  slug: z
    .string()
    .min(1, "Slug is required")
    .min(3, "Slug must be at least 3 characters")
    .max(100, "Slug must be less than 100 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can only contain lowercase letters, numbers, and hyphens"
    ),
});

export type BlogFormDataType = z.infer<typeof blogSchema>;

export type BlogPost = BlogFormDataType & {
  id: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};

export const blogUpdateSchema = blogSchema.extend({
  id: z.string(),
  published: z.boolean().default(false),
});

export type BlogUpdateDataType = z.infer<typeof blogUpdateSchema>;
