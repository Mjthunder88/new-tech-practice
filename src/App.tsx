import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./screens/Home";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

function App() {

const [showSearch, setShowSearch] = useState(false)

const searchHandler = () => {
  setShowSearch(!showSearch)
}

interface searchProps {
  showSearch: Boolean
}

  const theme = createTheme({
    palette: {
      primary: {
        main: "#7A9E9F",
      },
    },
  });
  responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Header />
        <Routes>
          <Route path="/*" element={<Home showSearch={searchProps} searchHandler={searchHandler} />} /> // TODO fix the  typing for passing props
        </Routes>
          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
