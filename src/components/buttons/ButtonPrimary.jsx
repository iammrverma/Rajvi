import React, { useState } from "react";

const ButtonPrimary = ({ title, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: `${
          isHovered ? "var(--border)" : "var(--text-primary-color)"
        }`,

        color: `${
          isHovered ? "var(--text-primary-color" : "var(--background-color)"
        }`,
        padding: ".75rem 1.35rem",
        borderRadius: ".5rem",
        cursor: "pointer",
        border: "none",
        outline: "none",
        fontSize: "1.5rem",
        fontWeight: "bold",
        transition: "all .3s ease",
        ...style,
      }}
    >
      {title ? title : "Button"}
    </button>
  );
};

export default ButtonPrimary;
