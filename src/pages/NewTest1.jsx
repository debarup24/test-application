import React, { useEffect, useRef, useState } from "react";

const NewTest1 = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleItems = entries.filter((entry) => entry.intersectionRatio > 0);
        //const visibleItems = entries.filter((entry) => entry.isIntersecting);
        setVisibleCount(visibleItems.length);
        console.log('Total Items: ',visibleItems.length) ;
        
      },
      { root: null, threshold: [0, 0.1]  } // Adjust threshold if needed
    );

    itemsRef.current.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [setVisibleCount]);

  return (
    <div style={{padding: "10px", height: "100vh", overflowY: "auto" }}>
      <h2>Visible Items: <strong>{visibleCount}</strong></h2>
      
      <ul>
        {Array.from({ length: 9 }).map((_, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#f4f4f4",
            }}
          >
            Item {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewTest1;
