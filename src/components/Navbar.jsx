import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4 flex items-center">
      {/* Logo or Placeholder for Left Alignment */}
      <div className="flex-1"></div>

      {/* Centered Title */}
      <h1 className="text-white font-bold text-lg tracking-wide uppercase text-center flex-1">
      𝗝𝗠𝗖 𝗠𝗘𝗗𝗜𝗖𝗜𝗡𝗘 𝗖𝗢𝗥𝗡𝗘𝗥 𝗟𝗧𝗗.
      </h1>

      {/* Logout Button (Right Alignment) */}
      <div className="flex-1 flex justify-end">
        <button className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
