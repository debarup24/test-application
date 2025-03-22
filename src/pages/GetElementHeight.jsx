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


// calculating Sidebar Height 
// const [sidebarHeight, setSidebarHeight] = useState(0);
// 	const [tabContainerHeight, setTabContainerHeight] = useState(0);
// 	const [sidebarItemsDynamically, setSidebarItemsDynamically] = useState(5);
//     const refSidebar = useRef(null);
// 	const refTabContainer = useRef(null);

// useIsomorphicLayoutEffect(() => {
//   const updateHeight = () => {
//   if (refSidebar.current) {
//     setSidebarHeight(Math.round(refSidebar.current.getBoundingClientRect().height));
//    }
// if (refTabContainer.current) {
//     setTabContainerHeight(Math.round(refTabContainer.current.getBoundingClientRect().height));
//    }
//   };

// updateHeight();
// window.addEventListener("resize", updateHeight);

// return () => window.removeEventListener("resize", updateHeight);

// }, []);

// useIsomorphicLayoutEffect(() => {
  
// if (sidebarHeight > 187) {  // (188 - 56 -56) / 76 = 1
//  setSidebarItemsDynamically(Math.floor((sidebarHeight - tabContainerHeight -56) / (tabContainerHeight+20))); // 20 gap,
//  } else {
//    setSidebarItemsDynamically(2); 
//  }

// }, [sidebarHeight]);
   
// console.log("1.Sidebar Uppr Height :", sidebarHeight ) ;
// console.log("2. Tabcontainer Height :", tabContainerHeight ) ;
// console.log("3. Items :", sidebarItemsDynamically ) ;
