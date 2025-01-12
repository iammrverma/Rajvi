import React from "react";
import Hero from "./Hero";
import ClientsCarousal from "./ClientsCarousal";
import FAQ from "./FAQ";
import Footer from "./Footer";
import ReusableSection from "./ReusableSection";
import ContactBanner from "./ContactBanner";
import person from "../assets/aboutHeroTwo.webp";
import { Testimonials } from "./Testimonials";

const Home = () => {
  const testimonial = [
    {
      name: "Raj Verma",
      img: person,
      description: "This is a description",
      designation: "webdeveloper",
    },
    {
      name: "Rohit Shetty",
      img: person,
      description:
        "Are Kya mast Website h man kar rha h golmal 99 bhi bna hi du",
      designation: "Director, Producer",
    },
    {
      name: "Badshah",
      img: person,
      description: "Saiyan ne dekha ese, Mai pani pani ho gai",
      designation: "Rapper",
    },
    {
      name: "Bella",
      img: person,
      description:
        "2024 me fir se ek album me fekunga uska koi tod nhi hoga ye fact h",
      designation: "Favourite Rapper",
    },
  ];

  return (
    <>
      <ReusableSection children={<Hero />} styles={{ marginBottom: "5rem" }} />
      <ReusableSection
        children={<ClientsCarousal />}
        styles={{ marginBottom: "5rem" }}
      />
      <ReusableSection
        children={<Testimonials testimonial={testimonial} />}
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
