import React from "react";
import {
  CARD_IMG_1,
  CARD_IMG_2,
  CARD_IMG_3,
  CARD_IMG_4,
} from "../../utils/constant";

const StoryCards = () => {
  return (
    <div className="flex flex-row md:flex md:flex-row lg:flex-row w-screen md:w-[800px] md:m-auto gap-2.5 p-1 md:p-3 items-center justify-center overflow-x-auto no-scrollbar">
      {/* cards comp */}
      <div className="h-28 w-20 md:h-36 md:w-24 bg-gray-500 relative cursor-pointer rounded-xl flex items-center justify-center">
        <p className="text-gray-100 font-light md:font-base text-sm md:text-sm text-center opacity-60">
          + add story
        </p>
      </div>

      <img
        className="h-28 w-20 md:h-36 md:w-24 flex cursor-pointer rounded-xl "
        src={CARD_IMG_1}
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src={CARD_IMG_2}
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src={CARD_IMG_3}
        alt=""
      />

      <img
        className="h-28 w-20 md:h-36 md:w-24 relative cursor-pointer rounded-xl "
        src={CARD_IMG_4}
        alt=""
      />
    </div>
  );
};

export default StoryCards;
