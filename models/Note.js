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
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 500,
    },
    bgcolor: {
      type: String,
      default: "#ffffff",
    },
    tagcolor: {
      type: String,
      default: "#000000",
    },
    isImportant: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Assignment", "Shopping", "Other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", noteSchema);
