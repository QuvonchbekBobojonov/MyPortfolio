import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import "bootstrap/dist/css/bootstrap.min.css";

import './styles/owl.carousel.min.css'
import './styles/owl.theme.default.min.css'
import './styles/animate.min.css'
import './styles/smooth-scrollbar.css'
import './styles/lightbox.min.css'

import './styles/style.css'
import './styles/responsive.css'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
