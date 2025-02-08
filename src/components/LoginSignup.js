// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import app from "../firebase"; // Firebase configuration file

// const auth = getAuth(app);
// const db = getFirestore(app);

// const LoginSignup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(true); // Toggle between login and signup
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // Handle authentication logic
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error before new action
//     try {
//       if (isSignup) {
//         // Sign-Up logic
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Save user details in Firestore
//         await setDoc(doc(db, "users", user.uid), {
//           email: user.email,
//           createdAt: new Date(),
//         });

//         console.log("User signed up:", user); // Debugging: Log user data
//         navigate("/home"); // Redirect to home page after successful sign-up
//       } else {
//         // Login logic
//         await signInWithEmailAndPassword(auth, email, password);
//         navigate("/home"); // Redirect to home page after successful login
//       }
//     } catch (err) {
//       if (err.code === "auth/email-already-in-use") {
//         setError("The email is already in use. Please login.");
//       } else {
//         setError(err.message); // Display general error messages
//       }
//       console.error("Authentication Error:", err); // Debugging: Log error details
//     }
//   };

//   // Inline styles
//   const styles = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       backgroundColor: "#f5f5f5",
//       fontFamily: "'Arial', sans-serif",
//     },
//     card: {
//       backgroundColor: "#fff",
//       padding: "30px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       width: "300px",
//       textAlign: "center",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "10px 0",
//       border: "1px solid #ccc",
//       borderRadius: "5px",
//       fontSize: "1rem",
//       outline: "none",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007BFF",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       fontSize: "1rem",
//       marginTop: "10px",
//     },
//     toggle: {
//       marginTop: "15px",
//       fontSize: "0.9rem",
//       color: "#555",
//       cursor: "pointer",
//     },
//     error: {
//       color: "red",
//       marginTop: "10px",
//       fontSize: "0.9rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2>{isSignup ? "Sign Up" : "Login"}</h2>
//         {error && <p style={styles.error}>{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={styles.input}
//             required
//           />
//           <button type="submit" style={styles.button}>
//             {isSignup ? "Sign Up" : "Login"}
//           </button>
//         </form>
//         <p style={styles.toggle} onClick={() => setIsSignup(!isSignup)}>
//           {isSignup
//             ? "Already have an account? Login here"
//             : "Don't have an account? Sign up here"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Stethoscope, UserCircle2, Lock, Mail } from "lucide-react";
import app from "../firebase";

const auth = getAuth(app);
const db = getFirestore(app);

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          createdAt: new Date(),
        });
        // Navigation will be handled by the useEffect hook
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // Navigation will be handled by the useEffect hook
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please sign in instead.");
        setIsSignup(false); // Automatically switch to sign in mode
      } else {
        setError(err.message.replace("Firebase: ", "").replace("auth/", "").replace(/-/g, " "));
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="depth-effect inline-block bg-white p-4 rounded-full shadow-lg mb-4">
            <Stethoscope className="w-12 h-12 text-blue-600 floating-element" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">MediCare Pro</h1>
          <p className="text-gray-600 mt-2">Your Health, Our Priority</p>
        </div>

        {/* Card Container */}
        <div className="medical-card">
          <div className="text-center mb-6">
            <UserCircle2 className="w-16 h-16 mx-auto text-blue-600 mb-2" />
            <h2 className="text-2xl font-bold text-gray-800">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-600 mt-1">
              {isSignup 
                ? "Join our medical community today" 
                : "Access your medical dashboard"}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label className="medical-label" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  className="medical-input pl-12"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="medical-label" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  className="medical-input pl-12"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="medical-button-primary gentle-pulse-effect">
              {isSignup ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
            >
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>Protected by industry standard encryption</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;