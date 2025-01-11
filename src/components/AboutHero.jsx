import React, { useEffect, useState } from "react";
import AboutHeroOne from "../assets/aboutHeroOne.webp";
import AboutHeroTwo from "../assets/aboutHeroTwo.webp";
import AboutHeroThree from "../assets/aboutHeroThree.webp";
import Counter from "./Counter";
const Card = ({ number = 100, title }) => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "2rem",
      }}
    >
      <p>{title}</p>
      <h2 style={{ fontSize: "6rem", fontWeight: "100" }}>
        <Counter targetNumber={number} />+
      </h2>
    </div>
  );
};

const AboutHero = () => {
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
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${isSmallScreen ? "1fr" : "1fr 1fr"}`,
        gap: ".5rem",

        justifyContent: "center",
      }}
    >
      <div
        className=""
        style={{
          height: "100%",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={AboutHeroOne}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: ".5rem",
        }}
      >
        <div className="div" style={{ overflow: "hidden" }}>
          <img
            src={AboutHeroTwo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="div" style={{ overflow: "hidden" }}>
          <Card title="We have 100+ satisfied clients" number={100} />
        </div>
        <div className="div" style={{ overflow: "hidden" }}>
          <Card
            title={"We helped to get companies with $25M+ funding"}
            number={25}
          />
        </div>
        <div className="div" style={{ overflow: "hidden" }}>
          <img
            src={AboutHeroThree}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
