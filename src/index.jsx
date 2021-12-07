import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './pages/DashBoard';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './utils/style/GlobalStyle';


ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <DashBoard />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
