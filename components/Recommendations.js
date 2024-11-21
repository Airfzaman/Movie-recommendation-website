// const recommendationsData = {
//     happy: {
//       movies: ["The Pursuit of Happyness", "Zootopia", "Up"],
//       books: ["The Alchemist by Paulo Coelho", "Harry Potter Series", "Wonder by R.J. Palacio"],
//     },
//     sad: {
//       movies: ["The Fault in Our Stars", "A Walk to Remember", "Inside Out"],
//       books: ["A Man Called Ove by Fredrik Backman", "Me Before You by Jojo Moyes", "The Book Thief by Markus Zusak"],
//     },
//     relaxed: {
//       movies: ["The Secret Life of Walter Mitty", "Eat Pray Love", "Amélie"],
//       books: ["Big Magic by Elizabeth Gilbert", "The Little Prince by Antoine de Saint-Exupéry", "Siddhartha by Hermann Hesse"],
//     },
//     motivated: {
//       movies: ["Rocky", "The Social Network", "The Pursuit of Happyness"],
//       books: ["Atomic Habits by James Clear", "Can't Hurt Me by David Goggins", "Start With Why by Simon Sinek"],
//     },
//   };
  
//   export default function Recommendations({ mood }) {
//     const { movies, books } = recommendationsData[mood] || {};
  
//     return (
//       <div>
//         <h2>Recommendations for "{mood}" mood:</h2>
//         <h3>Movies:</h3>
//         <ul>
//           {movies.map((movie, index) => (
//             <li key={index}>{movie}</li>
//           ))}
//         </ul>
//         <h3>Books:</h3>
//         <ul>
//           {books.map((book, index) => (
//             <li key={index}>{book}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
  



// import { useState, useEffect } from "react";

// export default function Recommendations({ mood }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const response = await fetch(`/api/movies?mood=${mood}`);
//         const data = await response.json();
//         setMovies(data);
//       } catch (error) {
//         console.error("Failed to fetch movies:", error);
//       }
//     }

//     if (mood) fetchMovies();
//   }, [mood]);

//   const styles = {
//     container: {
//       padding: "20px",
//       fontFamily: "Arial, sans-serif",
//     },
//     sectionTitle: {
//       fontSize: "24px",
//       marginBottom: "10px",
//     },
//     gridContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     card: {
//       border: "1px solid #ccc",
//       borderRadius: "10px",
//       padding: "15px",
//       textAlign: "left",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       transition: "transform 0.3s",
//     },
//     cardHover: {
//       transform: "scale(1.05)",
//     },
//     title: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       marginBottom: "10px",
//     },
//     detail: {
//       marginBottom: "5px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.sectionTitle}>Recommendations for "{mood}" mood:</h2>
//       <div style={styles.gridContainer}>
//         {movies.length > 0 ? (
//           movies.map((movie, index) => (
//             <div
//               key={index}
//               style={styles.card}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <p style={styles.title}>{movie.title}</p>
//               <p style={styles.detail}>
//                 <strong>Genre:</strong> {movie.genre}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Mood Tags:</strong> {movie.moodTags.join(", ")}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Rating:</strong> {movie.rating}
//               </p>
//               <p style={styles.detail}>
//                 <strong>Description:</strong> {movie.description}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No recommendations found for this mood.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// USING API KEY
  

import { useState, useEffect } from "react";
import axios from "axios";

export default function Recommendations({ mood }) {
  const [movies, setMovies] = useState([]);

  // Map mood to genres (TMDb uses genre IDs)
  const moodToGenre = {
    happy: 35, // Comedy
    sad: 18, // Drama
    relaxed: 10749, // Romance
    motivated: 28, // Action
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const genreId = moodToGenre[mood];
        const apiKey = "0575d49f954d14ac79f48281f0c5b1dc"; // Replace with your TMDb API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: apiKey,
              with_genres: genreId, // Filter movies by genre
              sort_by: "popularity.desc", // Sort by popularity
              page: 1, // Optional: pagination
            },
          }
        );

        // Extract movie data
        const moviesData = response.data.results.map((movie) => ({
          title: movie.title,
          genre: mood,
          rating: movie.vote_average,
          description: movie.overview,
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Full URL for the image
        }));

        setMovies(moviesData);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    if (mood) fetchMovies();
  }, [mood]);

  const styles = {
    container: {
      padding: "20px",
      color:"black",
      fontFamily: "Arial, sans-serif",
    },
    sectionTitle: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    detail: {
      marginBottom: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Recommendations for "{mood}" mood:</h2>
      <div style={styles.gridContainer}>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} style={styles.card}>
              <img
                src={movie.imageUrl}
                alt={movie.title}
                style={styles.image}
              />
              <p style={styles.title}>{movie.title}</p>
              <p style={styles.detail}>
                <strong>Genre:</strong> {movie.genre}
              </p>
              <p style={styles.detail}>
                <strong>Rating:</strong> {movie.rating}
              </p>
              <p style={styles.detail}>
                <strong>Description:</strong> {movie.description}
              </p>
            </div>
          ))
        ) : (
          <p>No recommendations found for this mood.</p>
        )}
      </div>
    </div>
  );
}
