// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const HomePage = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       {/* Header */}
// //       <div className="bg-gradient-to-b from-sky-100 to-white px-6 pt-8 pb-4 flex justify-between items-center">
// //         <div>
// //           <h2 className="text-gray-800 text-lg font-semibold">Welcome !</h2>
// //           <p className="text-gray-600 text-sm">Anushka</p>
// //           <p className="text-gray-500 text-xs mt-1">
// //             Your health at your fingertips!
// //           </p>
// //         </div>
// //         <img
// //           src="https://via.placeholder.com/40" // Replace with the actual user avatar URL
// //           alt="User Avatar"
// //           className="w-10 h-10 rounded-full"
// //         />
// //       </div>

// //       {/* Search Bar */}
// //       <div className="px-4 mt-4">
// //         <input
// //           type="text"
// //           placeholder="Search doctor, drugs, articles..."
// //           className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
// //         />
// //       </div>

// //       {/* AI Health Recommendations */}
// //       <div className="mt-4 px-4">
// //         <div className="bg-blue-100 rounded-lg p-4 shadow">
// //           <h3 className="text-blue-800 font-semibold mb-1">
// //             AI Health Recommendations
// //           </h3>
// //           <p className="text-gray-700 text-sm">
// //             ✨ <span className="font-medium">Your AI Health Tips:</span>
// //           </p>
// //           <p className="text-gray-600 text-sm mt-1">
// //             Stay hydrated and follow a balanced diet.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Book Appointment */}
// //       <div className="mt-4 px-4">
// //         <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 rounded-lg shadow">
// //           Book an Appointment
// //         </button>
// //       </div>

// //       {/* Buttons */}
// //       <div className="mt-6 flex justify-around px-4">
// //         <button
// //           className="bg-green-200 text-green-800 font-medium py-2 px-4 rounded-lg shadow hover:bg-green-300"
// //           onClick={() => navigate("/input-health")}
// //         >
// //           Input Your Health Data
// //         </button>
// //         <button
// //           className="bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-300"
// //           onClick={() => navigate("/3d-simulation")}
// //         >
// //           View 3D Simulations
// //         </button>
// //       </div>

// //       {/* Bottom Navigation */}
// //       <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3">
// //         <button className="flex flex-col items-center text-blue-600">
// //           <i className="fas fa-home text-lg"></i>
// //           <span className="text-xs">Home</span>
// //         </button>
// //         <button className="flex flex-col items-center text-gray-500">
// //           <i className="fas fa-clipboard-list text-lg"></i>
// //           <span className="text-xs">Recommendations</span>
// //         </button>
// //         <button className="flex flex-col items-center text-gray-500">
// //           <i className="fas fa-cog text-lg"></i>
// //           <span className="text-xs">Settings</span>
// //         </button>
// //         <button className="flex flex-col items-center text-gray-500">
// //           <i className="fas fa-user text-lg"></i>
// //           <span className="text-xs">Profile</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Home, Search, Sparkles, Calendar, Activity, ClipboardList, Settings, UserCircle, Brain, Cuboid as Cube } from 'lucide-react';

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pb-20">
//       {/* Header */}
//       <div className="bg-white shadow-sm px-6 pt-8 pb-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">Welcome!</h2>
//             <p className="text-blue-600 font-medium">Anushka</p>
//             <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
//               <Activity className="h-4 w-4" />
//               Your health at your fingertips
//             </p>
//           </div>
//           <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
//             <span className="text-lg font-semibold">A</span>
//           </div>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="px-4 mt-6 max-w-7xl mx-auto">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search doctors, medications, articles..."
//             className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
//           />
//         </div>
//       </div>

//       {/* AI Health Recommendations */}
//       <div className="mt-6 px-4 max-w-7xl mx-auto">
//         <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
//           <div className="flex items-center gap-2 mb-3">
//             <Brain className="h-6 w-6" />
//             <h3 className="text-xl font-semibold">AI Health Insights</h3>
//           </div>
//           <div className="flex items-start gap-2">
//             <Sparkles className="h-5 w-5 mt-1 flex-shrink-0" />
//             <div>
//               <p className="font-medium">Your Daily Health Tips:</p>
//               <ul className="mt-2 space-y-2 text-blue-50">
//                 <li>• Stay hydrated with 8 glasses of water daily</li>
//                 <li>• Take a 10-minute walk every 2 hours</li>
//                 <li>• Practice mindful breathing exercises</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="mt-6 px-4 max-w-7xl mx-auto">
//         <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-4 rounded-xl shadow-sm border border-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
//           <Calendar className="h-5 w-5 text-blue-600" />
//           Schedule an Appointment
//         </button>

//         <div className="mt-4 grid grid-cols-2 gap-4">
//           <button
//             onClick={() => navigate('/input-health')}
//             className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
//           >
//             <Activity className="h-6 w-6" />
//             <span>Input Health Data</span>
//           </button>
          
//           <button
//             onClick={() => navigate('/3d-simulation')}
//             className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
//           >
//             <Cube className="h-6 w-6" />
//             <span>3D Simulations</span>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
//         <div className="max-w-7xl mx-auto flex justify-around py-3">
//           <button className="flex flex-col items-center gap-1 text-blue-600">
//             <Home className="h-6 w-6" />
//             <span className="text-xs font-medium">Home</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
//             <ClipboardList className="h-6 w-6" />
//             <span className="text-xs font-medium">Reports</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
//             <Settings className="h-6 w-6" />
//             <span className="text-xs font-medium">Settings</span>
//           </button>
//           <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
//             <UserCircle className="h-6 w-6" />
//             <span className="text-xs font-medium">Profile</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Home, Search, Sparkles, Calendar, Activity, ClipboardList, Settings, UserCircle, Brain, Cuboid as Cube, LogOut } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 pt-8 pb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome!</h2>
            <p className="text-blue-600 font-medium">Anushka</p>
            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
              <Activity className="h-4 w-4" />
              Your health at your fingertips
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="font-medium">Logout</span>
            </button>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
              <span className="text-lg font-semibold">A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-6 max-w-7xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors, medications, articles..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 shadow-sm"
          />
        </div>
      </div>

      {/* AI Health Recommendations */}
      <div className="mt-6 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="h-6 w-6" />
            <h3 className="text-xl font-semibold">AI Health Insights</h3>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Your Daily Health Tips:</p>
              <ul className="mt-2 space-y-2 text-blue-50">
                <li>• Stay hydrated with 8 glasses of water daily</li>
                <li>• Take a 10-minute walk every 2 hours</li>
                <li>• Practice mindful breathing exercises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 px-4 max-w-7xl mx-auto">
        <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-4 rounded-xl shadow-sm border border-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          Schedule an Appointment
        </button>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/input-health')}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
          >
            <Activity className="h-6 w-6" />
            <span>Input Health Data</span>
          </button>
          
          <button
            onClick={() => navigate('/3d-simulation')}
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-2"
          >
            <Cube className="h-6 w-6" />
            <span>3D Simulations</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-around py-3">
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <ClipboardList className="h-6 w-6" />
            <span className="text-xs font-medium">Reports</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Settings className="h-6 w-6" />
            <span className="text-xs font-medium">Settings</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <UserCircle className="h-6 w-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;