// import Link from "next/link";
// import styles from "./styles.module.css"; // Import the CSS module

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.hero}>
//         <h1 className={styles.title}>Welcome to the Authentication App</h1>
//         <p className={styles.description}>
//           A secure and user-friendly platform for managing authentication.
//         </p>
//         <div className={styles.buttonGroup}>
//           <Link href="/signup" className={styles.button}>
//             Sign Up
//           </Link>
//           <Link href="/login" className={styles.button}>
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to the Movie Recommendations Pages</h1>
        <p style={styles.description}>
          A secure and user-friendly platform for Movie Recommendations.
        </p>
        <div style={styles.buttonGroup}>
          <Link href="/signup" style={{ ...styles.button, ...styles.primaryButton }}>
            Sign Up
          </Link>
          <Link href="/login" style={styles.button}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f4f5f7",
  },
  hero: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #0070f3",
    backgroundColor: "#ffffff",
    color: "#0070f3",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  primaryButton: {
    backgroundColor: "#0070f3",
    color: "#ffffff",
  },
};
