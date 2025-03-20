import React, { useState, useEffect, useRef } from "react";

const GetElementHeight = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(Math.round(ref.current.getBoundingClientRect().height));
      }
    };

    updateHeight(); // Initial height measurement
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  console.log("Current Div Height :", height )

  return (
    <div className="flex">
      <div
        ref={ref}
        className="flex min-w-xl bg-amber-100 px-12 py-[2px] my-[10px] shadow-md  shadow-blue-400"
      >
        {height}px
      </div>
    </div>
  );
};

export default GetElementHeight;



