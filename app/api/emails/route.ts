import { connectToDatabase } from "@/database";
import Email from "@/database/models/email.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const news = await Email.find().select('-_id email');

    if (!news) {
      return NextResponse.json({ success: false, message: "No email found" });
    }

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
