import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBoxes, FaChartLine, FaCog } from "react-icons/fa"; // Import Icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md z-50"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      {isOpen && (
        <div className="bg-gray-900 text-white fixed top-0 left-0 w-64 min-h-screen p-4 z-50">
          {/* Sidebar Heading */}
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          {/* Sidebar Menu */}
          <ul className="space-y-4">
            {/* Dashboard */}
            <li className="group flex items-center space-x-3 relative">
              <FaTachometerAlt className="text-blue-400 group-hover:scale-125 transition-transform duration-300" />
              <Link
                to="/"
                className="hover:text-blue-400 text-lg font-medium transition"
              >
                Dashboard
              </Link>
            </li>

            {/* Inventory */}
            <li className="group flex items-center space-x-3 relative">
              <FaBoxes className="text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
              <Link
                to="/inventory"
                className="hover:text-yellow-400 text-lg font-medium transition"
              >
                Inventory
              </Link>
            </li>

            {/* Sales */}
            <li className="group flex items-center space-x-3 relative">
              <FaChartLine className="text-green-400 group-hover:scale-125 transition-transform duration-300" />
              <Link
                to="/sales"
                className="hover:text-green-400 text-lg font-medium transition"
              >
                Sales
              </Link>
            </li>

              {/*  */}

              
            {/* Settings */}
            <li className="group flex items-center space-x-3 relative">
              <FaCog className="text-red-400 group-hover:scale-125 transition-transform duration-300" />
              <Link
                to="/settings"
                className="hover:text-red-400 text-lg font-medium transition"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
