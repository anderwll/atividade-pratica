import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/GlobalStyles';
import AppRouts from './routes/AppRouts';

const temas = {
  dark: {
    color: '#f5f5f5',
    backgroundColor: '#333',
    primary: '#80a2fb'
  },

  light: {
    color: '#333',
    backgroundColor: '#f5f5f5',
    primary: '#475da2'
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={temas.light}>
        <GlobalStyle />
        <AppRouts />
      </ThemeProvider>
    </>
  );
}

export default App;
