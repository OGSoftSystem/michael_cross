import { connectToDatabase } from "@/database";
import Leadership from "@/database/models/leadership.model";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const name = (await params).name;
  try {
    await connectToDatabase();

    const news = await Leadership.findOne({ name });

    if (!news) {
      return NextResponse.json({ success: false, message: "No leader found" });
    }

    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ success: false, message: error });
  }
}
