import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 200,
    },
    content: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    important: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Assignment", "Other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", noteSchema);
