import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
      fontFamily: 'Mulish, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      subtitle1: { fontWeight: 700 },
      subtitle2: { fontWeight: 700 },
      body1: { fontWeight: 700 },
      body2: { fontWeight: 700 },
      button: { fontWeight: 700 },
      caption: { fontWeight: 700 },
      overline: { fontWeight: 700 },
  },
});

const store = createStore(
  rootReducer
)

document.title = 'Amalify'

ReactDOM.render(
  <Provider store={store}>
     <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
