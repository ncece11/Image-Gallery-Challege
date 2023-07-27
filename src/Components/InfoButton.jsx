import React, { useState } from "react";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";

const InfoButton = ({ onClick }) => {
  return (
    <>
      <IconButton
        sx={{ color: "white" }}
        // aria-label={`star ${item.title}`}
        onClick={onClick}
        // onClick={handleClickOpen} // putformodal
      >
        <InfoIcon />
      </IconButton>
    </>
  );
};

export default InfoButton;
