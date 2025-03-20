import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="h-80 p-4  relative cursor-pointer bg-gray-100 border-gray-400 hover:bg-slate-200 rounded-xl">
        <p className="text-gray-600 font-semibold mt-1">Trending Now 🔥</p>
        <p className="text-blue-600 text-sm font-medium mt-4">
          #IndiaVSAustralia
        </p>
        <p className="text-blue-600 text-sm font-medium mt-3">
          #RusianAgentTrump
        </p>
        <p className="text-blue-600 text-sm font-medium mt-3">#KingVirat</p>
        <p className="text-blue-600 text-sm font-medium mt-3">#TeamIndia</p>
      </div>
    </div>
  );
};

export default ProfileCard;
