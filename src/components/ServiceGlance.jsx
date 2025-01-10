import React from "react";
import ExploreMore from "./ExploreMore";

import adobe from "../assets/logos/adobe.png";
import invision from "../assets/logos/invision.png";
import sketch from "../assets/logos/sketch.png";
import figma from "../assets/logos/figma.png";

import davinci from "../assets/logos/davinci.png";
import afterEffects from "../assets/logos/after-effects.png";
import finalCut from "../assets/logos/final-cut.png";

import illustrator from "../assets/logos/illustrator.png";

import ga from "../assets/logos/ga.png";
import hootsuite from "../assets/logos/hootsuite.png";
import hubspot from "../assets/logos/hubspot.png";

import react from "../assets/logos/react.png";
import aws from "../assets/logos/aws.png"
import nodejs from "../assets/logos/nodejs.png";
import mongodb from "../assets/logos/mongodb.png";
import Tools from "./Tools";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import RaiseUpOnScroll from "./RaiseUpOnScrool";
import SlideRightOnScroll from "./SlideRightOnscroll";

const ServiceBox = ({ number, title, description, subSkills, logos }) => {
  return (
    <RaiseUpOnScroll>
      <div
        className="serviceBox"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          alignItems: "stretch",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "2rem 0",
        }}
      >
        {/* Left Section */}
        <div
          className="serviceDetails"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            className="name-number"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "2rem",
            }}
          >
            <h5 style={{ fontSize: "3rem" }}>{number}</h5>
            <h5
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {title}
            </h5>
          </div>
          <div style={{ width: "100%", flex: "1" }}>
            <ExploreMore />
          </div>
        </div>

        {/* Right Section */}
        <div
          className="serviceDescription"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            flex: "1",
          }}
        >
          <div
            className="description"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <p>{description}</p>
            <div
              className="subSkills"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {subSkills.map((skill, index) => (
                <SlideRightOnScroll>
                  <h2
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <AutoModeIcon /> {skill}
                  </h2>
                </SlideRightOnScroll>
              ))}
            </div>
            <Tools svgList={logos} />
          </div>
        </div>
      </div>
    </RaiseUpOnScroll>
  );
};

const ServiceGlance = () => {
  const data = [
    {
      title: "Web Design",
      description:
        "In today’s digital-first world, your website is the face of your business. At Rajvi, we don’t just design websites – we craft digital experiences that captivate, engage, and convert. From stunning visuals to seamless user interactions, we focus on delivering responsive, user-friendly designs tailored to your brand’s story and audience. Let us help you make a lasting impression online and turn visitors into loyal customers. Your vision, our design – together, we create something extraordinary.",
      subSkills: [
        "Responsive Web Design",
        "UI User Interface",
        "UX User Experience",
      ],
      logos: [adobe, figma, invision, sketch],
    },
    {
      title: "Video Editing",
      description:
        "Transform raw footage into captivating stories. Our video editing expertise ensures your brand message hits home with sleek transitions, stunning effects, and precise cuts. Whether it’s promotional content, social media videos, or cinematic edits, we craft visuals that speak louder than words.",
      subSkills: ["Storyboarding", "Motion Graphics", "Color Grading"],
      logos: [adobe, davinci, finalCut, afterEffects],
    },
    {
      title: "Graphic Design",
      description:
        "Your brand deserves to stand out, and that’s where we come in. From eye-catching logos to sleek social media graphics, we create designs that resonate with your audience. Our mission is simple: turning your vision into visuals that inspire, connect, and elevate your brand.",
      subSkills: [
        "Branding & Identity",
        "Typography Design",
        "Digital Illustrations",
      ],
      logos: [illustrator, figma, adobe],
    },
    {
      title: "Digital Marketing",
      description:
        "In the crowded digital landscape, we ensure your brand gets the spotlight. Through data-driven strategies, engaging campaigns, and targeted outreach, we connect you with the right audience. Whether it’s boosting your social presence or driving conversions, we turn clicks into loyal customers.",
      subSkills: [
        "SEO & SEM Strategies",
        "Social Media Campaigns",
        "Email Marketing",
      ],
      logos: [hubspot, hootsuite, ga],
    },
    {
      title: "Web Development",
      description:
        "We don’t just build websites; we create digital experiences. From sleek, responsive designs to robust, scalable backends, we ensure your site isn’t just functional but future-ready. Whether you need a simple landing page or a full-fledged e-commerce platform, we craft solutions that blend technology and creativity to help your business shine online.",
      subSkills: [
        "Responsive Design",
        "Full-Stack Development",
        "Performance Optimization",
      ],
      logos: [aws, react, mongodb, nodejs],
    },
  ];

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "5rem", marginBottom: "3rem" }}
      >
        Our Services At Glance
      </h2>
      <div
        className="servicesContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {data.map((service, index) => (
          <ServiceBox
            key={index}
            number={index + 1}
            title={service.title}
            description={service.description}
            subSkills={service.subSkills}
            logos={service.logos}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGlance;
