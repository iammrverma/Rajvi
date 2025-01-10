import React from "react";
import { Box } from "@mui/material";

export const ReusableSection = ({ children, styles = {}, className = "" }) => {
  return (
    <Box
      className={className}
      sx={{
        padding: "2rem 0",
        ...styles, // Merge custom styles
        maxWidth:"100vw",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};
