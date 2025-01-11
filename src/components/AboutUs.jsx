import React from "react";
import ReusableSection from "./ReusableSection";
import Whyus from "./Whyus";
import FAQ from "./FAQ";
import ContactBanner from "./ContactBanner";
import Footer from "./Footer";
import AboutHero from "./AboutHero";

const AboutUs = () => {
  return (
    <>
      <ReusableSection
        children={<AboutHero />}
        styles={{ marginBottom: "7rem" }}
      />
      <ReusableSection children={<Whyus />} styles={{ marginBottom: "5rem" }} />
      <ReusableSection children={<FAQ />} styles={{ marginBottom: "5rem" }} />
      <ReusableSection
        children={<ContactBanner />}
        styles={{ marginBottom: "5rem", padding: "3rem" }}
      />
      <ReusableSection children={<Footer />} />
    </>
  );
};

export default AboutUs;
