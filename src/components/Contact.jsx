import React, { useEffect, useState } from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import Footer from "./Footer";
import ReusableSection from "./ReusableSection";



const ContactForm = () => {
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

  const styles = {
    title: { fontSize: `${isSmallScreen ? "2rem" : "4.375rem"}` },
    contactContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      padding: "3rem",
    },
    twofrgrid: {
      display: "grid",
      gridTemplateColumns: `${isSmallScreen ? "1fr" : "2fr 1fr"}`,
      gap: "3rem",
    },
    
    input: {
      background: "none",
      padding: "1rem 2rem",
      border: "none",
      outline: "none",
      borderBottom: "1px solid var(--text-primary-color)",
      color: "var(--text-secondary-color)",
      fontSize: "1rem",
    },
    flex: { display: "flex", flexDirection: "column", gap: "3rem" },
    row: {
      display: "grid",
      gridTemplateColumns: `${isSmallScreen ? "1fr" : "1fr 1fr"}`,
      alignItems: "center",
      gap: "2rem",
    },
    link: {
      color: "var(--text-secondary-color)",
      fontSize: "1.25em",
    },
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.twofrgrid}>
        <h1 style={styles.title}>We' Have been waiting for you</h1>
        <p>
          Add the best talent on the market, an agile skilled management &
          seamless involvement
        </p>
      </div>
      <div style={styles.twofrgrid}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={styles.row}>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="text" placeholder="Email" style={styles.input} />
          </div>
          <div style={styles.row}>
            <input
              type="text"
              placeholder="Mobile Number"
              style={styles.input}
            />
            <input type="text" placeholder="Subject" style={styles.input} />
          </div>
          <input type="text" placeholder="message" style={styles.input} />
        </div>
        <div style={styles.flex}>
          <h2>We want to hear from you. Let's us know how we can help!</h2>
          <div>
            <a href="tel:" style={styles.link}>
              XXX-XXX-XXX
            </a>
          </div>
          <div>
            <a href="mailto:" style={styles.link}>
              mail@example.com
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ButtonPrimary title={"Send Message"} />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <ReusableSection
        children={<ContactForm />}
        styles={{ marginBottom: "5rem" }}
      />

      <ReusableSection children={<Footer />} />
    </>
  );
};

export default Contact;
