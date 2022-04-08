import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  talkAboutYou: { type: String },
  weekday: [
    {
      day: { type: Number },
      time: [{ type: String }],
    },
  ],
});

const profiles = mongoose.model("profiles", profileSchema);

export default profiles;