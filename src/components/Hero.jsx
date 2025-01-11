import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import Follower from "./Follower";
import TextHeart from "../icons/TextHeart";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left, // Relative X position within the `right` div
      y: e.clientY - rect.top, // Relative Y position within the `right` div
    });
  };
  return (
    <>
      <div className="hero">
        <div className="left">
          <div className="anchor">
            <div className="row">
              <span>we</span> <span></span> <TextHeart />
              <span>Love</span>
            </div>
            <div className="row">
              <span>What</span> <span>We</span>
            </div>
            <div className="row">
              <span>Do</span>
            </div>
          </div>
          <div className="direction">
            <span>That's Why we are best in it</span>
          </div>
        </div>

        <div
          className="right"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={handleMouseMove}
        >
          <Follower
            hover={hover}
            cursorPosition={cursorPosition}
            size={200}
            color={"var(--theme)"}
          />
          <div className={`target ${hover ? "hover" : ""}`}>
            <div></div>
            <div>Web Designs</div>
            <div>Digital marketing</div>

            <div>Video editing</div>
            <div>Graphichs Designing</div>
            <div></div>

            <div></div>
            <div></div>
            <div>Web Development</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
