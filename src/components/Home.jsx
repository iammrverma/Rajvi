import React from "react";
import Hero from "./Hero";
import ClientsCarousal from "./ClientsCarousal";
import FAQ from "./Faq";
import Footer from "./Footer";
import { ReusableSection } from "./ReusableSection";

const Home = () => {
  return (
    <>
      <ReusableSection children={<Hero />} styles={{marginBottom:"5rem"}}/>
      <ReusableSection children={<ClientsCarousal />} styles={{marginBottom:"5rem"}} />
      <ReusableSection children={<FAQ />} styles={{marginBottom:"5rem"}} />
      <ReusableSection children={<Footer />} />
    </>
  );
};

export default Home;
