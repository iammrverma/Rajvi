import React from "react";

const ButtonSecondary = ({ text, styles, onClick }) => {
  return (
    <button
    onClick={onClick}
      className="secondary-button"
      style={{
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        borderRadius: "2rem",
        whiteSpace:"nowrap",
        ...styles,
      }}
    >
      <div className="element"></div>
      {text ? text : "Seoncdry button"}
    </button>
  );
};

export default ButtonSecondary;
