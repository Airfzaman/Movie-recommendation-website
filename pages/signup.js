// import { useState } from 'react';

// export default function SignUp() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//       <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// export default function SignUp() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/auth/signup', {
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
//         <h1 style={styles.title}>Sign Up</h1>
//         <input
//           type="text"
//           placeholder="Name"
//           style={styles.input}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
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
//         <button type="submit" style={styles.button}>
//           Sign Up
//         </button>
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


import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Account created successfully!');
      router.push('/login'); // Redirect to login after successful signup
    } else {
      alert(data.message || 'Signup failed');
    }
  };

  const handleRefresh = () => {
    setFormData({ name: '', email: '', password: '' }); // Clear form fields
  };

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Sign Up</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            style={styles.input}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
          <div style={styles.buttonGroup}>
            <button type="button" style={styles.secondaryButton} onClick={handleRefresh}>
              Refresh
            </button>
            <button type="button" style={styles.secondaryButton} onClick={handleBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'linear-gradient(to bottom, #4a148c, #880e4f)',
    color: '#ffffff',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#4a148c',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#4a148c',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '15px',
  },
  secondaryButton: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

// Add hover effects
styles.input[':focus'] = { borderColor: '#0070f3' };
styles.button[':hover'] = { backgroundColor: '#6a1b9a' };
styles.secondaryButton[':hover'] = { backgroundColor: '#e0e0e0' };
