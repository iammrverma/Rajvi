import React from "react";
import "../styles/clientsCarousal.css";

// Import logos
import logo3M from "../assets/logos/3m.svg";
import barstoolStore from "../assets/logos/barstool-store.svg";
import budweiser from "../assets/logos/budweiser.svg";
import buzzfeed from "../assets/logos/buzzfeed.svg";
import forbes from "../assets/logos/forbes.svg";
import macys from "../assets/logos/macys.svg";
import mensHealth from "../assets/logos/menshealth.svg";
import mrBeast from "../assets/logos/mrbeast.svg";

const ClientsCarousal = ({  height = "10rem" }) => {
  const logos = [
    logo3M,
    barstoolStore,
    budweiser,
    buzzfeed,
    forbes,
    macys,
    mensHealth,
    mrBeast,
  ];

  return (
    <div className="logos" style={{ height }}>
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client logo ${index + 1}`} />
        ))}
      </div>
      <div className="logos-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousal;
