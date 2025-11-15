"use server";

import { revalidatePath } from "next/cache";

import { handleErrors } from "../utils";

import { connectToMongoDB } from "../mongodb";

// Server Action
export async function updateUserRole(email: string, role: string) {
  try {
    const { db, client } = await connectToMongoDB();

    const result = await db.collection("user").updateOne(
      { email },
      {
        $set: {
          role:
            role === "user" ? "creator" : role === "creator" ? "admin" : "user",
          updatedAt: new Date(),
        },
      }
    );

    await client.close();

    if (result.modifiedCount > 0) {
      revalidatePath("/dashboard/admin/users");
      return { success: true, message: `User role updated to ${role}` };
    } else {
      return { error: "User not found or role not changed" };
    }
  } catch (error) {
    return { error: handleErrors(error) };
  }
}

export async function deleteUser(email: string) {
  try {
    const { db, client } = await connectToMongoDB();

    await db.collection("user").deleteOne({ email });

    revalidatePath("/dashboard/admin/users");
    await client.close();
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
