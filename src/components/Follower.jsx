import React, { useEffect, useState } from "react";

const Follower = ({ hover, cursorPosition, size = "200", color = "var(--theme)", style }) => {
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame;

    const lagMovement = () => {
      setFollowerPosition((prev) => {
        const newX = prev.x + (cursorPosition.x - prev.x) * 0.1; // Adjust lag speed
        const newY = prev.y + (cursorPosition.y - prev.y) * 0.1;
        return { x: newX, y: newY };
      });

      animationFrame = requestAnimationFrame(lagMovement);
    };

    if (hover) {
      animationFrame = requestAnimationFrame(lagMovement);
    }

    return () => cancelAnimationFrame(animationFrame); // Cleanup on hover exit
  }, [cursorPosition, hover]);

  return (
    <div
      className="follower"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        visibility: hover ? "visible" : "hidden",
        position: "absolute",
        top: `${followerPosition.y - size / 2}px`, // Centering the follower
        left: `${followerPosition.x - size / 2}px`,
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "transform 0.1s ease",
        boxShadow: "rgb(255, 255, 255) 0px 0px 20px;",
        ...style
      }}
    ></div>
  );
};

export default Follower;
