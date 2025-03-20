import React, { useState } from "react";
import ProfileCard from "./cards/ProfileCard";
import { DEBARUP_PROFILR_PIC } from "../utils/constant";

const RightSidebar = () => {
  return (
    <div
      className={`relative hidden md:hidden lg:hidden xl:block w-80 z-10 h-screen flex-shrink-0 shadow-md`}
    >
      {/* for toggle and name */}

      <div className="flex justify-between gap-1.5 p-5">
        <p className="font-semibold md:text-lg lg:text-lg text-sm">
          What's <span className="text-red-400">Happening ?</span>
        </p>
        <div className="flex flex-row gap-2 cursor-pointer px-1">
          <img
            className="size-6 cursor-pointer rounded-full"
            src={DEBARUP_PROFILR_PIC}
            alt=""
          />
          <p className="text-sm text-slate-700 font-medium">Debarup</p>
        </div>
      </div>

      <div className="px-6 py-2 m-1">
        <ProfileCard />
      </div>
    </div>
  );
};

export default RightSidebar;
