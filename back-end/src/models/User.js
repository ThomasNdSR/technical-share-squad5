import mongoose from "mongoose";
import availables from "./Available.js";

const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  img: {
    type: schema.Types.ObjectId,
    ref: "images",
  },
  skill: [
    {
      type: schema.Types.ObjectId,
      ref: "skills",
    },
  ],
  project:[{type: String}],
  available: [availables.schema],
  favorite: [
    {
      type: schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const users = mongoose.model("users", userSchema);

export default users;
