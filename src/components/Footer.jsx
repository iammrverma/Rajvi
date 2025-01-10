import { Input } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Navlist } from "./Navbar";

const Footer = () => {
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
              maxWidth: "60% ",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h1 style={{ fontSize: "6.25rem", letterSpacing: "4px" }}>
              Get Started now
            </h1>
            <p style={{ fontSize: "2rem" }}>
              Would like to work with us? Get in touch now for further details
              or any work related queries
            </p>
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
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="city">
              <h3 style={{ fontSize: "2rem" }}>Gurugram</h3>
            </div>
            <div className="streetAdress">
              <p>Huda city Metro, Haryana, India</p>
            </div>
          </div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="city">
              <h3 style={{ fontSize: "2rem" }}>Gurugram</h3>
            </div>
            <div className="streetAdress">
              <p>Huda city Metro, Haryana, India</p>
            </div>
          </div>

          <div
            className="f-email"
            style={{
              borderBottom: "1px solid var(--text-primary-color)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem ",
            }}
          >
            <Input
              placeholder="Enter Email"
              sx={{
                fontSize: "1.5rem",
                color: "var(--text-primary-color)",
                outline: "none",
                border: "none",
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
                "&.Mui-focused": {
                  outline: "none",
                  boxShadow: "none",
                },
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
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4rem 0",
            width: "100%",
            gap: "3rem",
          }}
        >
          <p style={{ fontSize: "1.5rem" }}>
            © 2021 All rights reserved by Rajvi
          </p>

          <Navlist wrap={true} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
