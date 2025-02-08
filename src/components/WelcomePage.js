// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import WelcomePage1 from "../images/wp.png"; // Import the image

// const WelcomePage = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/onboarding'); // Navigate to the first onboarding page
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <h1 style={styles.title}>Welcome to MediGen AI</h1>
//         <p style={styles.subtitle}>
//           Your partner in personalized health insights and cutting-edge 3D visualization.
//         </p>
        
//         {/* Display the image with styles */}
//         <img src={WelcomePage1} alt="Welcome" style={styles.image} />

//         <button style={styles.button} onClick={handleGetStarted}>
//           Get Started
//         </button> 
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#E8F3FF',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   content: {
//     maxWidth: '400px',
//     padding: '20px',
//   },
//   title: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     color: '#004B8D',
//   },
//   subtitle: {
//     fontSize: '16px',
//     color: '#555',
//     marginBottom: '20px',
//   },
//   image: {
//     width: '100%', // Adjust image size as needed
//     height: 'auto', // Maintain aspect ratio
//     marginBottom: '20px',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     color: '#FFF',
//     border: 'none',
//     padding: '12px 20px',
//     borderRadius: '50px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     outline: 'none',
//     boxShadow: '0 4px 6px rgba(0, 123, 255, 0.2)',
//   },
// };

// export default WelcomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, ChevronRight, Brain, Activity } from 'lucide-react';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-100"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-full h-full flex items-center justify-center shadow-lg">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900">
            MediGen <span className="text-blue-600">AI</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-sm mx-auto">
            Your partner in personalized health insights and cutting-edge 3D visualization
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">AI Powered</h3>
            <p className="text-xs text-gray-500 mt-1">Smart health insights</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-md">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">3D Visuals</h3>
            <p className="text-xs text-gray-500 mt-1">Interactive models</p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="pt-4">
          <button
            onClick={handleGetStarted}
            className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
            <span className="relative z-10">Get Started</span>
          </button>
          
          <p className="mt-4 text-sm text-gray-500">
            Experience the future of healthcare
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;