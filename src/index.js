import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App/App';
// import { StyledApp } from 'components/App.styled';

import { GlobalStyles } from 'utils/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <StyledApp> */}
      <BrowserRouter basename="goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
      {/* </StyledApp> */}
    </ThemeProvider>
  </React.StrictMode>
);
