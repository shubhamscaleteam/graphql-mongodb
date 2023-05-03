// Database movies model

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  duration: {
    type: String,
    require: true,
  },
  genre: {
    type: [String],
    require: true,
  },
  score: {
    type: Number,
    require: true,
  },
});

export const Movies = mongoose.model("movies", moviesSchema);

