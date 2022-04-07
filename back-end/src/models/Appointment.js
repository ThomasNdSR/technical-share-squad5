import mongoose from "mongoose";

const schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "users",
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  mentor: {
    type: schema.Types.ObjectId,
    ref: "users",
  },
  status: { type: Boolean },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointments = mongoose.model("appointments", appointmentSchema);

export default appointments;
