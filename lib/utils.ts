import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";
import parse from 'html-react-parser'

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

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to estimate read time
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}


// Validation for image URLs (optional enhancement)
export const validateImageUrl = (url: string): boolean => {
  if (!url) return true; // Empty is allowed
  
  try {
    const parsedUrl = new URL(url);
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
    const pathname = parsedUrl.pathname.toLowerCase();
    
    return allowedExtensions.some(ext => pathname.endsWith(ext));
  } catch {
    return false;
  }
};

export const cleanText = (text: string) => {
  return text ? parse(text) : "";
};