import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Catalog from "./../../features/catalog/Catalog";
import Header from "./Header";
import { Route } from "react-router-dom";
import HomePage from "./../../features/home/HomePage";
import ProductDetails from "./../../features/catalog/ProductDetails";
import ContactPage from "./../../features/contact/ContactPage";
import AboutPage from "./../../features/about/AboutPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
      ></Header>
      <Container>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={ContactPage} />
        <Route path="/contact" component={AboutPage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
