import { model, models, Schema } from "mongoose";

const leadershipSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    position: {
      type: String,
      required: [true, "position is required"],
    },
    image: {
      type: String,
      //   required: [true, "image is required"],
    },
    department: {
      type: String,
      // required: [true, "department is required"],
    },
    about: {
      type: String,
      required: [true, "about is required"],
    },
    experience: {
      type: String,
      // required: [true, "experience is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      // required: [true, "phone is required"],
    },
    qualifications: [
      {
        type: String,
        // required: [true, "qualifications is required"],
      },
    ],
    isMuted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Leadership = models.Leadership || model("Leadership", leadershipSchema);

export default Leadership;
