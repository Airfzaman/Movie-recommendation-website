// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from "../utils/auth";
// import Navbar from "../components/Navbar";
// import Recommendations from "../components/Recommendations";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mood, setMood] = useState("");

//   useEffect(() => {
//     // Redirect to login if not authenticated
//     if (!isAuthenticated()) {
//       router.push("/login");
//     }
//   }, []);

//   const handleMoodChange = (e) => {
//     setMood(e.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome to Your Dashboard</h1>
//       <p>Select your mood to get movie and book recommendations:</p>
//       <select onChange={handleMoodChange} value={mood}>
//         <option value="">Select Mood</option>
//         <option value="happy">Happy</option>
//         <option value="sad">Sad</option>
//         <option value="relaxed">Relaxed</option>
//         <option value="motivated">Motivated</option>
//       </select>
//       {mood && <Recommendations mood={mood} />}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from "../utils/auth";
// import Navbar from "../components/Navbar";
// import Recommendations from "../components/Recommendations";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mood, setMood] = useState("");

//   useEffect(() => {
//     // Redirect to login if not authenticated
//     if (!isAuthenticated()) {
//       router.push("/login");
//     }
//   }, []);

//   const handleMoodChange = (e) => {
//     setMood(e.target.value);
//   };

//   return (
//     <div>
//       <style jsx>{`
//         body {
//           font-family: "Arial", sans-serif;
//           margin: 0;
//           padding: 0;
//           background-color: #f5f5f5;
//         }
//         .dashboard-container {
//           text-align: center;
//           padding: 20px;
//           max-width: 800px;
//           margin: 0 auto;
//           background: #ffffff;
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//         }
//         h1 {
//           color: #333;
//           font-size: 2rem;
//           margin-bottom: 10px;
//         }
//         p {
//           font-size: 1.2rem;
//           color: #666;
//           margin-bottom: 20px;
//         }
//         select {
//           font-size: 1rem;
//           padding: 10px;
//           margin: 10px 0;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           background: #f9f9f9;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }
//         select:hover {
//           background: #f0f0f0;
//         }
//         .recommendations-container {
//           margin-top: 20px;
//         }
//       `}</style>
//       <Navbar />
//       <div className="dashboard-container">
//         <h1>Welcome to Your Dashboard</h1>
//         <p>Select your mood to get movie and book recommendations:</p>
//         <select onChange={handleMoodChange} value={mood}>
//           <option value="">Select Mood</option>
//           <option value="happy">Happy</option>
//           <option value="sad">Sad</option>
//           <option value="relaxed">Relaxed</option>
//           <option value="motivated">Motivated</option>
//         </select>
//         {mood && (
//           <div className="recommendations-container">
//             <Recommendations mood={mood} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from "../utils/auth";
// import Navbar from "../components/Navbar";
// import Recommendations from "../components/Recommendations";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mood, setMood] = useState("");

//   useEffect(() => {
//     // Redirect to login if not authenticated
//     if (!isAuthenticated()) {
//       router.push("/login");
//     }
//   }, []);

//   const handleMoodChange = (e) => {
//     setMood(e.target.value);
//   };

//   return (
//     <div>
//       <style jsx>{`
//         body {
//           font-family: "Arial", sans-serif;
//           margin: 0;
//           padding: 0;
//           background-color: #f5f5f5;
//         }
//         .dashboard-container {
//           text-align: center;
//           padding: 20px;
//           max-width: 90%;
//           margin: 30px auto;
//           background: #ffffff;
//           border-radius: 10px;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//         }
//         h1 {
//           color: #333;
//           font-size: 2rem;
//           margin-bottom: 10px;
//         }
//         p {
//           font-size: 1.2rem;
//           color: #666;
//           margin-bottom: 20px;
//         }
//         select {
//           font-size: 1rem;
//           padding: 10px;
//           margin: 10px 0;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           background: #f9f9f9;
//           cursor: pointer;
//           color:black;
//           transition: background 0.3s ease, box-shadow 0.3s ease;
//         }
//         select:focus {
//           outline: none;
//           background: #e0ffe0;
//           box-shadow: 0 0 8px #4caf50;
//         }
//         select:hover {
//           background: #f0f0f0;
//         }
//         .recommendations-container {
//           margin-top: 20px;
//         }
//         @media (max-width: 768px) {
//           h1 {
//             font-size: 1.5rem;
//           }
//           p {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//       <Navbar />
//       <div className="dashboard-container">
//         <h1>Welcome to Your Dashboard</h1>
//         <p>Select your mood to get movie and book recommendations:</p>
//         <select onChange={handleMoodChange} value={mood}>
//           <option value="">Select Mood</option>
//           <option value="happy">Happy</option>
//           <option value="sad">Sad</option>
//           <option value="relaxed">Relaxed</option>
//           <option value="motivated">Motivated</option>
//         </select>
//         {mood && (
//           <div className="recommendations-container">
//             <Recommendations mood={mood} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "../utils/auth";
import Navbar from "../components/Navbar";
import Recommendations from "../components/Recommendations";

export default function Dashboard() {
  const router = useRouter();
  const [mood, setMood] = useState("");

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  return (
    <div>
      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          font-family: "Arial", sans-serif;
          background: url("/path-to-your-image.jpg") no-repeat center center fixed;
          background-size: cover;
        }

        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9); /* Slight transparency for aesthetic */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .content {
          margin-top: 60px; /* Offset for fixed navbar */
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 20px;
          overflow-y: auto;
        }

        .dashboard-container {
          max-width: 1200px;
          width: 100%;
          background: rgba(255, 255, 255, 0.85); /* Transparent white for readability */
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        h1 {
          color: #333;
          font-size: 2.2rem;
          text-align: center;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          color: #666;
          text-align: center;
          margin-bottom: 20px;
        }

        select {
          font-size: 1rem;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #f9f9f9;
          cursor: pointer;
          color: black;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        select:focus {
          outline: none;
          background: #e0ffe0;
          box-shadow: 0 0 8px #4caf50;
        }

        select:hover {
          background: #f0f0f0;
        }

        .recommendations-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          width: 100%;
        }

        .recommendation-card {
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .recommendation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }

          p {
            font-size: 1rem;
          }

          .dashboard-container {
            padding: 15px;
          }

          select {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="container">
        {/* Fixed Navbar */}
        <div className="navbar">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="dashboard-container">
            <h1>Welcome to Your Dashboard</h1>
            <p>Select your mood to get movie and book recommendations:</p>
            <select onChange={handleMoodChange} value={mood}>
              <option value="">Select Mood</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="relaxed">Relaxed</option>
              <option value="motivated">Motivated</option>
            </select>
            {mood && (
              <div className="recommendations-container">
                <Recommendations mood={mood} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
