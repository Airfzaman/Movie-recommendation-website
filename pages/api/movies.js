// pages/api/movies.js
import connectDB from "../../lib/mongodb";
import Movie from "../../models/Movie";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const { mood } = req.query;

    try {
      // Find movies matching the mood
      const movies = await Movie.find({ moodTags: { $in: [mood] } });
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
