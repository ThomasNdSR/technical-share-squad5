import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const skills = mongoose.model("skills", skillSchema);

export default skills;