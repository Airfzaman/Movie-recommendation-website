// import { useState } from 'react';

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   const handleBack = () => {
//     router.back();
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <h1 style={styles.title}>Login</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           style={styles.input}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           style={styles.input}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />
//         <button type="submit" style={styles.button}>Login</button>
//         <div style={styles.buttonGroup}>
//           <button type="button" style={styles.secondaryButton} onClick={handleRefresh}>
//             Refresh
//           </button>
//           <button type="button" style={styles.secondaryButton} onClick={handleBack}>
//             Back
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     padding: '20px',
//     backgroundColor: '#f4f5f7',
//   },
//   form: {
//     backgroundColor: '#ffffff',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   title: {
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: '10px',
//     textAlign: 'center',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   button: {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s',
//   },
//   buttonGroup: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '10px',
//     marginTop: '10px',
//   },
//   secondaryButton: {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     backgroundColor: '#f0f0f0',
//     color: '#333',
//     border: '1px solid #ccc',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'background-color 0.3s',
//   },
// };

// // Add hover effects
// styles.input[':focus'] = { borderColor: '#0070f3' };
// styles.button[':hover'] = { backgroundColor: '#005bb5' };
// styles.secondaryButton[':hover'] = { backgroundColor: '#e0e0e0' };

// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       localStorage.setItem("authToken", result.token); // Store the auth token
//       router.push("/dashboard"); // Redirect to dashboard
//     } else {
//       alert(result.message || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }



// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       localStorage.setItem("authToken", result.token); // Store the auth token
//       router.push("/dashboard"); // Redirect to dashboard
//     } else {
//       alert(result.message || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h1 style={styles.title}>Login</h1>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     padding: "20px",
//     backgroundColor: "#f5f7fa",
//   },
//   formContainer: {
//     backgroundColor: "#ffffff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//     textAlign: "center",
//     transition: "transform 0.3s, box-shadow 0.3s",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   input: {
//     padding: "12px",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     transition: "border-color 0.3s",
//     outline: "none",
//     boxSizing: "border-box",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     backgroundColor: "#0070f3",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// // Add hover and focus effects
// styles.input[":focus"] = {
//   borderColor: "#0070f3",
// };

// styles.button[":hover"] = {
//   backgroundColor: "#005bb5",
// };

// styles.formContainer[":hover"] = {
//   transform: "scale(1.02)",
//   boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
// };


// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       localStorage.setItem("authToken", result.token); // Store the auth token
//       router.push("/dashboard"); // Redirect to dashboard
//     } else {
//       alert(result.message || "Login failed");
//     }
//   };

//   const handleRefresh = () => {
//     // Reset the form fields
//     setFormData({ email: "", password: "" });
//   };

//   const navigateToSignUp = () => {
//     // Redirect to the Sign Up page
//     router.push("/signup");
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h1 style={styles.title}>Login</h1>
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//             style={styles.input}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>
//             Login
//           </button>
//         </form>
//         <div style={styles.buttonGroup}>
//           <button onClick={handleRefresh} style={styles.secondaryButton}>
//             Refresh
//           </button>
//           <button onClick={navigateToSignUp} style={styles.secondaryButton}>
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     padding: "20px",
//     backgroundColor: "#f5f7fa",
//   },
//   formContainer: {
//     backgroundColor: "#ffffff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//     textAlign: "center",
//     transition: "transform 0.3s, box-shadow 0.3s",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   title: {
//     fontSize: "1.8rem",
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   input: {
//     padding: "12px",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//     transition: "border-color 0.3s",
//     outline: "none",
//     boxSizing: "border-box",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     backgroundColor: "#0070f3",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   buttonGroup: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "10px",
//     marginTop: "20px",
//   },
//   secondaryButton: {
//     padding: "10px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     backgroundColor: "#f0f0f0",
//     color: "#333",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// // Add hover and focus effects
// styles.input[":focus"] = {
//   borderColor: "#0070f3",
// };

// styles.button[":hover"] = {
//   backgroundColor: "#005bb5",
// };

// styles.formContainer[":hover"] = {
//   transform: "scale(1.02)",
//   boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
// };

// styles.secondaryButton[":hover"] = {
//   backgroundColor: "#e0e0e0",
// };


import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      localStorage.setItem("authToken", result.token); // Store the auth token
      router.push("/dashboard"); // Redirect to dashboard
    } else {
      alert(result.message || "Login failed");
    }
  };

  const handleRefresh = () => {
    setFormData({ email: "", password: "" }); // Reset fields
  };

  const navigateToSignUp = () => {
    router.push("/signup"); // Redirect to Sign Up
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            style={styles.input}
          />
          <div style={styles.options}>
            <label>
              <input type="checkbox" style={styles.checkbox} />
              Remember me
            </label>
            <button
              type="button"
              style={styles.link}
              onClick={() => alert("Forgot Password functionality pending")}
            >
              Forgot password
            </button>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <button onClick={navigateToSignUp} style={styles.secondaryButton}>
          Create Account
        </button>
        <button onClick={handleRefresh} style={styles.secondaryButton}>
          Refresh
        </button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom, #4a148c, #880e4f)",
    color: "#ffffff",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    padding: "30px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "2rem",
    color: "#4a148c",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    transition: "all 0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#4a148c",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  secondaryButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "1rem",
    color: "#4a148c",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "8px",
  },
  link: {
    background: "none",
    color: "#4a148c",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
