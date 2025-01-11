import React, { useEffect, useState } from "react";
import RaiseUpOnScroll from "./RaiseUpOnScrool";
import ButtonSecondary from "./buttons/ButtonSecondary";
import TextHeart from "../icons/TextHeart";
import { useNavigate } from "react-router-dom";

const ContactBanner = () => {
  const navigate = useNavigate();
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
    <RaiseUpOnScroll>
      <div
        className="contact-banner"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",

          gap: "3rem",
          padding: "4rem",
          backgroundColor: "#1b1b1b",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <TextHeart
          styles={{
            fontSize: "35rem",

            position: "absolute",
            top: "50%",
            left: "90%",
            transform: "translate(-50%, -50%) rotate(-90deg)",
          }}
        />

        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className=""
            style={{ display: `${isSmallScreen ? "none" : ""}` }}
          >
            <RaiseUpOnScroll>
              <h2
                style={{
                  fontSize: `${isSmallScreen ? "2rem" : "4rem"}`,
                  textTransform: "uppercase",
                }}
              >
                Stop Wasting Time
              </h2>
            </RaiseUpOnScroll>
          </div>
          <RaiseUpOnScroll>
            <h2
              style={{
                fontSize: `${isSmallScreen ? "2rem" : "4rem"}`,
                textTransform: "uppercase",
              }}
            >
              Lets Get Some Work done
            </h2>
          </RaiseUpOnScroll>
        </div>
        <RaiseUpOnScroll>
          <ButtonSecondary
            text="Get in touch now"
            onClick={() => navigate("/contact")}
            styles={{
              padding: "1.5rem 2rem",
              fontSize: "1.5rem",
              backgroundColor: "white",
            }}
          />
        </RaiseUpOnScroll>
      </div>
    </RaiseUpOnScroll>
  );
};

export default ContactBanner;
