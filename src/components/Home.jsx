import React from "react";
import Hero from "./Hero";
import ClientsCarousal from "./ClientsCarousal";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { ReusableSection } from "./ReusableSection";
import ServiceGlance from "./ServiceGlance";
import ContactBanner from "./ContactBanner";

const Home = () => {
  return (
    <>
      <ReusableSection children={<Hero />} styles={{ marginBottom: "5rem" }} />
      <ReusableSection
        children={<ClientsCarousal />}
        styles={{ marginBottom: "5rem" }}
      />
      <ReusableSection
        children={<ServiceGlance />}
        styles={{ marginBottom: "5rem" }}
      />
      <ReusableSection
        children={<ContactBanner />}
        styles={{ marginBottom: "5rem", padding: "3rem" }}
      />
      <ReusableSection children={<FAQ />} styles={{ marginBottom: "5rem" }} />
      <ReusableSection children={<Footer />} />
    </>
  );
};

export default Home;
