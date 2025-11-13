import { LeadershipFormDataType } from "@/lib/validations";

export type NewsType = {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
  date: string;
  content: string;
  isPublished: boolean;
  // createdAt: "2025-11-09T03:59:20.123Z";
  // updatedAt: "2025-11-09T03:59:20.123Z";
  // __v: 0;
};

export interface LeadershipFormType extends LeadershipFormDataType {
  _id: string;
}

export type LeadershipCardType = {
  name: string;
  position: string;
  qualifications: string[];
  department: string;
  image: string;
  about: string;
  phone: string;
  experience: string;
  email: string;
  isMuted?: boolean;
};
