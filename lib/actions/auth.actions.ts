"use server";

import {
  SignInFormDataType,
  signInSchema,
  SignUpFormDataType,
  signUpSchema,
} from "../validations";
import { handleErrors } from "../utils";
import { auth } from "../auth";
import { UserRoles } from "@/database/models/user.model";
import { revalidatePath } from "next/cache";

export async function signUp(data: SignUpFormDataType) {
  try {
    const parsed = signUpSchema.safeParse(data);

    if (!parsed.success) {
      return { success: false, error: handleErrors(parsed.error.message) };
    }

    const result = await auth.api.signUpEmail({
      body: {
        email: parsed.data.email,
        name: parsed.data.name,
        password: parsed.data.password,
        role: UserRoles.USER,
      },
    });

    if (result) {
      revalidatePath("/dashboard/users");
    }

    return { success: true, user: result.user };
  } catch (error) {
    console.log(error);

    return { error: handleErrors(error) };
  }
}

export async function signIn(data: SignInFormDataType) {
  try {
    const parsed = signInSchema.safeParse(data);

    if (!parsed.success) {
      return { success: false, error: handleErrors(parsed.error.message) };
    }

    const res = await auth.api.signInEmail({
      body: {
        email: parsed.data.email,
        password: parsed.data.password,
      },
    });

    return { success: true, user: res.user };
  } catch (error) {
    console.log(error);
    return { success: false, error: handleErrors(error) };
  }
}
