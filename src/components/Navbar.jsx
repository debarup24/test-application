import React, { useState } from "react";
import { SquareMenu } from "lucide-react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="block bg-white md:hidden w-full shadow mb-3 shadow-gray-300">
      <div className="flex gap-1.5 p-3">
        <button onClick={expandNavbar}>
          {isExpanded ? (
            <RxCross1 className="h-6 w-6" />
          ) : (
            <SquareMenu className="h-6 w-6" />
          )}
        </button>

        <p className="font-semibold md:text-lg lg:text-lg text-sm">
          Wylo <span className="text-red-400">Social</span>
        </p>
      </div>

      {isExpanded && (
        <div className="w-full h-screen p-5">
          <Link to={"/"}>
            {" "}
            <p className="p-4 border-b border-gray-600">Home</p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p className="p-4 border-b border-gray-600">Search</p>
          </Link>
          <p className="p-4 border-b border-gray-600">Notification</p>
          <p className="p-4 border-b border-gray-600">Message</p>
          <Link to={"/add-post"}>
            {" "}
            <p className="p-4 border-b border-gray-600">Create</p>
          </Link>
          <p className="p-4 border-b border-gray-600">Trending 🔥</p>
          <p className="p-4 border-b border-gray-600">Profile</p>
          <p className="p-4 border-b border-gray-600">Logout</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
