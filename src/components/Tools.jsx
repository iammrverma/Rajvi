import React, { useEffect, useState } from "react";
import "../styles/Tools.css";

const Tools = ({ svgList }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".tools");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="tools">
      {svgList.map((src, index) => (
        <div
          key={index}
          className={`tool ${inView ? "animate" : ""}`}
          style={{ animationDelay: `${index * 0.3}s` }} // Stagger animation
        >
          <img src={src} alt={`Tool ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Tools;
