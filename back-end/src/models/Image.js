import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  originalname: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
});

const images = mongoose.model("images", imageSchema);

export default images;
