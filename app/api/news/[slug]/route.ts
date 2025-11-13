import { connectToDatabase } from "@/database";
import News from "@/database/models/news.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    await connectToDatabase();

    const news = await News.findOne({ slug });

    if (!news) {
      return NextResponse.json({ success: false, message: "No news found" });
    }

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
