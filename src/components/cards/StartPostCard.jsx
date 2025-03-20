import { Camera, SquarePen, SquarePlay } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DEBARUP_PROFILR_PIC } from "../../utils/constant";

const StartPostCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mx-1 items-center justify-center mt-2 py-3 px-24">
      <div className="bg-gray-100 md:mx-2 rounded-lg">
        <div className="flex flex-row items-center p-3 m-1 gap-2">
          {" "}
          <img
            className="size-7 ml-2 md:ml-1 lg:ml-0 md:size-9 lg:size-12 cursor-pointer rounded-full"
            src={DEBARUP_PROFILR_PIC}
            alt=""
          />
          <span
            className="bg-gray-100 border border-slate-800 py-2.5 md:py-2.5 lg:py-3 px-32 md:px-52 lg:px-52 md:mx-2 rounded-full cursor-pointer"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <p className="text-[10px] md:text-xs lg:text-xs text-gray-600">
              Start Posting today
            </p>
          </span>
        </div>

        <div className="flex py-3 gap-24 px-5 m-1 justify-between">
          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <SquarePlay className="text-green-600 size-5 md:size-7" />
            <p className="text-sm">Video</p>
          </div>

          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <Camera className="text-blue-600 size-5 md:size-7" />
            <p className="text-sm">Photo</p>
          </div>

          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => {
              navigate("/add-post");
            }}
          >
            <SquarePen className="text-red-500 size-5 md:size-7" />
            <p className="text-sm">Write</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPostCard;
