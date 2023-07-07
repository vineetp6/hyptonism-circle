import './App.css'

import React, { useState, useEffect } from "react";

const HypnotismCircle = () => {
  const [radius, setRadius] = useState(100);
  const [animationSpeed, setAnimationSpeed] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius(radius + 1);
      if (radius >= 200) {
        setRadius(0);
      }
    }, animationSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [animationSpeed]);

  return (
    <div style={{ width: radius * 2, height: radius * 2 }}>
      <svg viewBox="0 0 200 200">
        <circle cx="100" cy="100" r={radius} />
      </svg>
    </div>
  );
};

export default HypnotismCircle;







// Moving CIrcle
// import React, { useState } from "react";

// const HypnoticCircle = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   const handleMouseMove = (event) => {
//     setX(event.clientX);
//     setY(event.clientY);
//   };

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: y,
//         left: x,
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         backgroundColor: "red",
//       }}
//       onMouseMove={handleMouseMove}
//     />
//   );
// };

// export default HypnoticCircle;