export const mail = {
  host: process.env.EMAIL_HOST as string,
  port: process.env.EMAIL_PORT as string,
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASS as string,
  },
};

export const mongo_url = process.env.MONGO_URL as string;
export const cloudinaryImageUrl = process.env.NEXT_PUBLIC_IMAGE_URL as string;
