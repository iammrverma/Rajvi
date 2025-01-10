import React from "react";

const TextHeart = ({ styles }) => {
  return (
    <span
      style={{
        fontSize: "0.5em",
        transform:"rotateZ(-90deg)",
        color: "var(--theme)",
        ...styles,
      }}
      className="text-heart"
    >
      {"<3"}
    </span>
  );
};

export default TextHeart;
