// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
//     </div>
//   );
// }

"use client"
import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [dots, setDots] = useState([]);
  const totalDots = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      const newDots = [...dots];
      const nextDotIndex = newDots.findIndex((dot) => dot === 0);

      if (nextDotIndex === -1) {
        newDots.push(1);
      } else {
        newDots[nextDotIndex] = 1;
        const prevDotIndex = (nextDotIndex + totalDots - 1) % totalDots;
        newDots[prevDotIndex] = 2;
      }

      setDots(newDots);
    }, 100);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="flex space-x-2">
        {Array.from({ length: totalDots }, (_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              dots[i] === 1
                ? 'bg-yellow-500 animate-jump'
                : dots[i] === 2
                ? 'bg-yellow-300'
                : 'bg-yellow-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;