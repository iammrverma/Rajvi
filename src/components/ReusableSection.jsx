import React from "react";
import { Box } from "@mui/material";

const ReusableSection = ({ children, styles = {}, className = "" }) => {
  return (
    <Box
      className={className}
      sx={{
        ...styles, // Merge custom styles
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

export default ReusableSection;