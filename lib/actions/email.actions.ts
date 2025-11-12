// lib/actions/blog.actions.ts
"use server";

import { connectToDatabase } from "@/database";

import { revalidatePath } from "next/cache";
import { handleErrors } from "../utils";
import Email from "@/database/models/email.model";
import { EmailFormDataType, emailSchema } from "../validations";

export async function subcribeToNewsLetter(data: EmailFormDataType) {
  console.log("calling", data.email);

  try {
    const parsed = emailSchema.safeParse(data);
    if (!parsed.success) {
      console.log("here");

      throw new Error(parsed.error.message);
    }
    await connectToDatabase();

    const existingEmail = await Email.findOne({ email: parsed.data.email });
    if (existingEmail) {
      throw new Error("Email already exists");
    }

    const newEmail = await Email.create({ ...parsed.data });

    if (newEmail) {
      revalidatePath("/dashboard/admin/users");
      console.log(newEmail);
    }
  } catch (error) {
    console.log(error);

    return {
      error: handleErrors(error) || "Failed to create email. Please try again.",
    };
  }
}

export async function updateEmail(email: string) {
  try {
    await connectToDatabase();

    const mail = await Email.findOneAndUpdate(
      { email },
      {
        email: email,
      },
      { new: true }
    );

    if (mail) {
      console.log(mail);

      revalidatePath("/dashboard/admin/users");
    }

    return { success: true };
  } catch (error) {
    console.error("Blog update error:", error);
    return { error: handleErrors(error) || "Failed to update blog post" };
  }
}

export async function deleteEmail(email: string) {
  try {
    await connectToDatabase();

    const news = await Email.findOneAndDelete({ email });

    if (news) revalidatePath("/dashboard/admin/users");

    return { success: true };
  } catch (error) {
    return { error: handleErrors(error) || "Failed to delete email " };
  }
}

export async function getEmails() {
  // Simulate database fetch
  await connectToDatabase();

  const emails = await Email.find();

  return JSON.parse(JSON.stringify(emails));
}

export async function getEmail(email: string) {
  await connectToDatabase();

  const emal = await Email.findOne({ email });

  return JSON.parse(JSON.stringify(emal));
}
