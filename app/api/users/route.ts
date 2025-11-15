import { mongo_url } from "@/env";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  let client;
  try {
    client = new MongoClient(mongo_url);
    await client.connect();

    const db = client.db("michael-cross");

    const users = (await db.collection("user").find({}).toArray()).map(
      (u) => u
    );

    if (users.length === 0) {
      return NextResponse.json({
        success: false,
        message: "No users found in 'users' collection",
        database: db.databaseName,
      });
    }

    const formatedUser = users.map((u) => {
      const userId = u._id.toString().slice(0, 4);
      return {
        userId,
        name: u.name,
        email: u.email,
        role: u.role,
      };
    });
    return NextResponse.json({
      success: true,
      users: formatedUser,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({
      success: false,
      message: error,
    });
  } finally {
    if (client) await client.close();
  }
}
