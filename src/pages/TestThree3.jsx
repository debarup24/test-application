import React, { useState, useEffect, useRef } from "react";

const TestThree3 = () => {
  
  const allItems = ["a", "b", "c", "d", "e", "f", "g", "h"];

  
  const [primaryFeatures, setPrimaryFeatures] = useState(allItems.slice(0, 5)); 
  const [secondaryFeatures, setSecondaryFeatures] = useState(allItems.slice(5)); 
  const upperContainerRef = useRef(null); 

 
  useEffect(() => {
    const handleResize = () => {
      if (upperContainerRef.current) {
        const containerHeight = upperContainerRef.current.clientHeight;
        const itemElements = Array.from(
          upperContainerRef.current.children
        ); 

        let visibleItems = [];
      //  let visibleItmCount = allItems.length ;
        let hiddenItems = [];
        let hiddenItmCount = 0;
        //let count = hiddenItems.length;
         
       // console.log('starting :', visibleItems.length) ; 
        
        itemElements.forEach((item, index) => {
          const itemRect = item.getBoundingClientRect(); 
          const containerRect = upperContainerRef.current.getBoundingClientRect();

          
          if (
            itemRect.top >= containerRect.top &&
            itemRect.bottom <= containerRect.bottom
          ) {
            visibleItems.push(allItems[index]); 
            let visibleItmCount = visibleItems.length ;
            console.log('visible item :', visibleItmCount );
          } else {
            hiddenItems.push(allItems[index]); 
          
             console.log("More items:", hiddenItems.length)
             
              
          }
        });

        setPrimaryFeatures(visibleItems); 
        setSecondaryFeatures(hiddenItems); 
      }
    };

    window.addEventListener("resize", handleResize); 
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize); 
  }, [setSecondaryFeatures]);

  return (
    <div style={{ height: "100vh", border: "1px solid black", padding: "10px" }}>
      {/* Upper Container with Primary Features */}
      <div
        ref={upperContainerRef}
        style={{ overflow: "hidden", height: "60vh", marginBottom: "10px" }}
      >
        {primaryFeatures.map((item, index) => (
          <div key={index} style={{ padding: "10px", background: "#f4f4f4", margin: "5px 0" }}>
            {item}
          </div>
        ))}
      </div>

      {/* Lower Container with 'More' Button */}
      <div style={{ borderTop: "1px solid gray", padding: "10px" }}>
        <details>
          <summary style={{ cursor: "pointer" }}>More {secondaryFeatures}</summary>
          <div>
            {secondaryFeatures.map((item, index) => (
              <div key={index} style={{ padding: "10px", background: "#d4d4d4", margin: "5px 0" }}>
                {item}
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default TestThree3;
