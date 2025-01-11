import React, { useEffect, useState } from "react";
import one from "../assets/shapes/one.webp";
import two from "../assets/shapes/two.webp";
import three from "../assets/shapes/three.webp";
import { RaiseUpOnScroll, SlideLeftOnScroll } from "../animations/Animation";
import TextHeart from "../icons/TextHeart";
import Follower from "./Follower";

const Card = ({ src, title, description, isSmallScreen }) => {
  console.log(isSmallScreen);

  return (
    <SlideLeftOnScroll>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          padding: `${isSmallScreen ? "2rem 0" : "0 6rem 3.5rem"}`,
          borderInlineEnd: "1px solid var(--background-color)",
        }}
      >
        <div>
          <img src={src} style={{ height: "85px" }} />
        </div>
        <h1
          className="title"
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            color: "var(--background-color)",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
        <p className="description" style={{ color: "var(--background-color)" }}>
          {description}
        </p>
      </div>
    </SlideLeftOnScroll>
  );
};

const Whyus = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Set initial value
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

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
    <SlideLeftOnScroll>
      <div
        style={{
          backgroundColor: "var(--theme)",
          display: "flex",
          flexDirection: "column",
          alignItems: `${isSmallScreen ? "flex-start" : "center"}`,
          gap: "5rem",
          padding: "3rem 0 3rem 1rem",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
      >
        <Follower
          hover={hover}
          cursorPosition={cursorPosition}
          size="50"
          lag={0.07}
        />
        <Follower
          hover={hover}
          cursorPosition={cursorPosition}
          size="10"
          lag={0.05}
          color="black"
        />

        <div
          style={{
            maxWidth: `${isSmallScreen ? "80%" : "60%"}`,
            position: "relative",
          }}
        >
          <TextHeart
            styles={{
              fontSize: "10em",
              color: "var(--text-primary-color)",
              position: "absolute",
              top: "50%",
              left: `${isSmallScreen ? "85%" : "-5%"}`,
              transform: "translate(-50%,-50%) rotateZ(-90deg)",
            }}
          />
          <RaiseUpOnScroll>
            <div
              style={{
                fontSize: `${isSmallScreen ? "2rem" : "4rem"}`,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Wondering Why
            </div>
          </RaiseUpOnScroll>

          <RaiseUpOnScroll>
            <div
              style={{
                fontSize: `${isSmallScreen ? "2rem" : "4rem"}`,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              to chose us
            </div>
          </RaiseUpOnScroll>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `${isSmallScreen ? "1fr" : "1fr 1fr 1fr"}`,
            alignItems: "stretch",
          }}
        >
          <Card
            src={one}
            title={"Dedicated Team"}
            description={
              "Find the best fit engineers led by senior, seasoned, and skilled our tech- lead. "
            }
            isSmallScreen={isSmallScreen}
          />
          <Card
            src={two}
            title={"Product Team"}
            description={
              "Get top-notch service from an experienced Product Designer Manager team."
            }
            isSmallScreen={isSmallScreen}
          />
          <Card
            src={three}
            title={"End-to-End Team"}
            description={
              "Hire an elite squad of leading have professionals to turn idea into an ready-to-market product"
            }
            isSmallScreen={isSmallScreen}
          />
        </div>
      </div>
    </SlideLeftOnScroll>
  );
};

export default Whyus;
