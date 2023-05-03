// Database movies model

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const Users = mongoose.model("users",userSchema)
