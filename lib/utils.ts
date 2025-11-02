import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleErrors(error: unknown) {
  let message: string = "";

  if (error instanceof Error) {
    message = error.message;
  } else if (error === typeof ZodError) {
    message = JSON.stringify(error);
  } else if (error && typeof error === "object" && "message" in error) {
    message = JSON.stringify(error.message);
  } else if (typeof error === "string") {
    message = error;
  }

  return message;
}
