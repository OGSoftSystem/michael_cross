import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { handleErrors } from "@/lib/utils";

export const UserRoles = {
  USER: "user",
  CREATOR: "creator",
  ADMIN: "admin",
  STAFF: "staff",
} as const;

export type UserRole = (typeof UserRoles)[keyof typeof UserRoles];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    username: {
      type: String,
      required: [true, "username is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: Object.values(UserRoles),
      default: UserRoles.USER,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);

      this.password = hashedPassword;

      next(); // Proceeed after executing block
    } catch (error) {
      return { error: handleErrors(error) };
    }
  }
  next(); // Proceeed to other things even when if block fails
});

const User = models.User || model("User", userSchema);

export default User;
