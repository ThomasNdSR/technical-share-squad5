import mongoose from "mongoose";

const schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
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
  ref: [
    {
      user: {
        type: schema.Types.ObjectId,
        ref: "users",
      },
    },
    {
      mentor: {
        type: schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  status: { type: Boolean },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointments = mongoose.model("appointments", appointmentSchema);

export default appointments;
