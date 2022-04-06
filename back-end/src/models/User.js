import mongoose from "mongoose";

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
  mentor:{
    type:Boolean,
  },
  profile: {
    type: schema.Types.ObjectId,
    ref: "profiles",
  },
});

const users = mongoose.model("users", userSchema);

export default users;
