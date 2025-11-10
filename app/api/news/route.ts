import { connectToDatabase } from "@/database";
import News from "@/database/models/new.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const news = await News.find();

    if (!news) {
      return NextResponse.json({ success: false, message: "No news found" });
    }

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
