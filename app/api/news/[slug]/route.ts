import { connectToDatabase } from "@/database";
import News from "@/database/models/new.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const slug = params.get("slug") as string;
  
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
