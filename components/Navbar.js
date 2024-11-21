// import Link from "next/link";

// export default function Navbar() {
//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Remove the auth token
//     window.location.href = "/login"; // Redirect to login
//   };

//   return (
//     <nav>
//       <ul>
//         <li><Link href="/dashboard">Dashboard</Link></li>
//         <li><button onClick={handleLogout}>Logout</button></li>
//       </ul>
//     </nav>
//   );
// }


import Link from "next/link";

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the auth token
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <nav>
      <style jsx>{`
        nav {
          background: #4caf50; /* Green background */
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        li {
          margin: 0 10px;
        }
        a {
          text-decoration: none;
          color: white;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #d4f5d4;
        }
        button {
          background: white;
          color: #4caf50;
          border: none;
          border-radius: 5px;
          padding: 8px 15px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }
        button:hover {
          background: #4caf50;
          color: white;
        }
      `}</style>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
