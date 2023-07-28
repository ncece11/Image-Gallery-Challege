import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

const InfoButton = ({ onClick }) => {
  return (
    <>
      <IconButton
        sx={{ color: "white" }}
        // aria-label={`star ${item.title}`}
        onClick={onClick} // putformodal
      >
        <InfoIcon />
      </IconButton>
    </>
  );
};

export default InfoButton;
