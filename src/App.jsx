import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import GalleryComponent from "./Components/GalleryComponent";
import FooterComponent from "./Components/FooterComponent";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#283446",
        paper: "#283446",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f0f8ff",
        paper: "#f0f8ff",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <IconButton
          sx={{ ml: 1 }}
          onClick={handleDarkModeChange}
          color="inherit"
          className="darkmode"
        >
          {darkMode ? <NightsStayIcon /> : <LightModeIcon />}
        </IconButton>
        <HeaderComponent />
        <GalleryComponent />
        <FooterComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
