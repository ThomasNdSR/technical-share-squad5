import mongoose from "mongoose";

const availableSchema = new mongoose.Schema({
  week: [
    {
      weekday: { type: Number },
      timeHour: [{ type: Number }],
    },
  ],
});

const availables = mongoose.model("availables", availableSchema);

export default availables;
