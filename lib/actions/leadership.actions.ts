"use server";

import { connectToDatabase } from "@/database";
import { LeadershipFormDataType, leadershipSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { handleErrors } from "../utils";
import Leadership from "@/database/models/leadership.model";

export async function createLeader(data: LeadershipFormDataType) {
  try {
    const parsed = leadershipSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(parsed.error.message);
    }

    await connectToDatabase();

    const existingLeader = await Leadership.findOne({ name: parsed.data.name });
    if (existingLeader) {
      throw new Error("This name already exists");
    }

    const formatedQualifications = parsed.data.qualifications
      .split("-")
      .map((i) => i);

    const newLeader = await Leadership.create({
      ...parsed.data,
      qualifications: formatedQualifications,
    });

    if (newLeader) {
      revalidatePath("/dashboard/admin/leadership");
      revalidatePath("/leadership");
    }
  } catch (error) {
    console.error("Leadership creation error:", error);
    return {
      error:
        handleErrors(error) || "Failed to create leader. Please try again.",
    };
  }
}

export async function updateLeader(name: string, data: LeadershipFormDataType) {
  try {
    const formatedQualifications = data.qualifications.split("-").map((i) => i);

    await connectToDatabase();

    const leader = await Leadership.findOneAndUpdate(
      { name },
      {
        $set: {
          ...data,
          qualifications: formatedQualifications,
        },
      },
      { new: true }
    );

    console.log("Update", leader);

    if (leader) {
      revalidatePath("/dashboard/admin/leadership");
      revalidatePath("/leadership");
    }

    return { success: true };
  } catch (error) {
    console.error("Leader update error:", error);
    return { error: handleErrors(error) || "Failed to update leader leader" };
  }
}

export async function deleteLeader(id: string) {
  try {
    await connectToDatabase();

    const leader = await Leadership.findOneAndDelete({ _id: id });

    if (leader) {
      revalidatePath("/dashboard/admin/leadership");
      revalidatePath("/leadership");
    }

    return { success: true };
  } catch (error) {
    console.error("Leader deletion error:", error);
    return { error: handleErrors(error) || "Failed to delete blog leader" };
  }
}

export async function muteLeader(name: string, isMuted: boolean) {
  try {
    await connectToDatabase();

    await Leadership.updateOne(
      { name },
      {
        $set: {
          isMuted,
        },
      }
    );
    revalidatePath("/dashboard/admin/leadership");
    revalidatePath("/leadership");
  } catch (error) {
    return { error: handleErrors(error) };
  }
}
