import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7A9E9F'
      }
    }
  });
  responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <h4>Hello Darkness my old friend</h4>
      <Footer />
    </div>
    </ThemeProvider>
      
  );
}

export default App;
