import { connectToDatabase } from "@/database";
import Leadership from "@/database/models/leadership.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const news = await Leadership.find();

    if (!news) {
      return NextResponse.json({ success: false, message: "No leader found" });
    }

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
