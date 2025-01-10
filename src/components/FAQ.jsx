import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/FAQ.css"; // Add this CSS file for styling

const FAQ = () => {
  const faqs = [
    {
      question: "What is Material-UI?",
      answer: "Material-UI is a popular React UI framework.",
    },
    {
      question: "How do I install MUI?",
      answer:
        "Run `npm install @mui/material @emotion/react @emotion/styled` to install MUI.",
    },
    {
      question: "Can I customize MUI components?",
      answer: "Yes, MUI provides extensive theming and styling options.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h1>Frequently Asked Questions</h1>
        <p>You can always reach out if you have any further queries.</p>
      </div>
      <div className="faq-right">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "var(--background-color)",
              color: "var(--text-primary-color)",
              borderRadius: "0px",
              marginBottom: "1rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "var(--text-primary-color)",
                  textTransform: "uppercase",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
