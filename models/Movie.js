// models/Movie.js
import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  moodTags: [String], // Array of mood tags
  rating: { type: Number, required: true }, // e.g., IMDb or custom rating
  description: { type: String, required: true },
});

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
