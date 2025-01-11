import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = targetNumber;
    const stepTime = Math.abs(Math.floor(duration / (end - start))); // Time per increment

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span>{count}</span>;
};

export default Counter;
