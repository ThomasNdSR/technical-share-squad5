import mongoose from "mongoose";

const availableSchema = new mongoose.Schema({
  weekday: [
    {
      day: { type: Number },
      time: [{ type: String }],
    },
  ],
});

const available = mongoose.model("available", availableSchema);

export default available;