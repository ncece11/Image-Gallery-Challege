import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";

import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import GalleryComponent from "./Components/GalleryComponent";
import FooterComponent from "./Components/FooterComponent";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  // Create a custom dark theme with a custom background color
  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Set the theme mode to 'dark' for dark mode
      primary: {
        main: "#2196F3", // Your custom primary color for dark mode
      },
      secondary: {
        main: "#FF4081", // Your custom secondary color for dark mode
      },
      background: {
        default: "#283446", // Your custom background color for dark mode
        paper: "#283446", // Your custom background color for paper elements in dark mode
      },
      // You can customize other palette colors as well, like error, warning, success, etc.
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif", // You can specify custom fonts here
      // Customize the typography for your application
      // For example, you can change the font size, line height, etc.
    },
    // Add other custom styles here, such as for buttons, cards, etc.
  });

  // Create a custom light theme (if needed) with a different background color
  const lightTheme = createTheme({
    palette: {
      mode: "light", // Set the theme mode to 'light' for light mode
      primary: {
        main: "#2196F3", // Your custom primary color for light mode
      },
      secondary: {
        main: "#FF4081", // Your custom secondary color for light mode
      },
      background: {
        default: "#f0f8ff", // Your custom background color for light mode
        paper: "#f0f8ff", // Your custom background color for paper elements in light mode
      },
      // You can customize other palette colors as well, like error, warning, success, etc.
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif", // You can specify custom fonts here
      // Customize the typography for your application
      // For example, you can change the font size, line height, etc.
    },
    // Add other custom styles here, such as for buttons, cards, etc.
  });
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <div>
          {/* <FormControlLabel
            control={
              <Switch checked={darkMode} onChange={handleDarkModeChange} />
            }
            label="Dark Mode"
          /> */}

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
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
