import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Navlist } from "./Navbar";
import { RaiseUpOnScroll, SlideLeftOnScroll } from "../animations/Animation";

const Footer = () => {
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
    <div>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          backgroundColor: "var(--background-secondary-color)",
          color: "var(--text-primary-color)",
          padding: "3rem",
          gap: "3rem",
        }}
      >
        <div
          className="f-one"
          style={{
            borderBottom: "2px solid var(--border)",
            padding: "4rem 0",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: `${isSmallScreen ? "100%" : "60%"}`,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <RaiseUpOnScroll>
              <h1
                style={{
                  fontSize: `${isSmallScreen ? "3rem" : "6.25rem"}`,
                  letterSpacing: "4px",
                }}
              >
                Get Started now
              </h1>
            </RaiseUpOnScroll>
            <RaiseUpOnScroll>
              <p style={{ fontSize: "2rem" }}>
                Would like to work with us? Get in touch now for further details
                or any work related queries
              </p>
            </RaiseUpOnScroll>
          </div>
        </div>
        <div
          className="f-two"
          style={{
            gap: "3rem",
            padding: "4rem 0",
            borderBottom: "2px solid var(--border)",
            alignItems: "center",

            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="city">
              <RaiseUpOnScroll>
                <h3 style={{ fontSize: "2rem" }}>Gurugram</h3>
              </RaiseUpOnScroll>
            </div>
            <div className="streetAdress">
              <RaiseUpOnScroll>
                <p>Huda city Metro, Haryana, India</p>
              </RaiseUpOnScroll>
            </div>
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="city">
              <RaiseUpOnScroll>
                <h3 style={{ fontSize: "2rem" }}>Gurugram</h3>
              </RaiseUpOnScroll>
            </div>
            <div className="streetAdress">
              <RaiseUpOnScroll>
                <p>Huda city Metro, Haryana, India</p>
              </RaiseUpOnScroll>
            </div>
          </div>

          <div
            className="f-email"
            style={{
              borderBottom: "1px solid var(--text-primary-color)",
              display: "flex",
              flex: "1",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem ",
            }}
          >
            <input
              placeholder="Enter Email"
              style={{
                fontSize: "1.5rem",
                color: "var(--text-primary-color)",
                outline: "none",
                border: "none",
                backgroundColor: "Var(--background-secondary-color)",
              }}
            />
            <KeyboardDoubleArrowRightIcon
              sx={{
                color: "var(--text-primary-color)",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div
          className="three"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4rem 0",
            width: "100%",
            gap: "3rem",
          }}
        >
          <RaiseUpOnScroll>
            <p style={{ fontSize: "1.5rem" }}>
              © 2021 All rights reserved by Rajvi
            </p>
          </RaiseUpOnScroll>
          <SlideLeftOnScroll>
            <Navlist wrap={true} />
          </SlideLeftOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Footer;
