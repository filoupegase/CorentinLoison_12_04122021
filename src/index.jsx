import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './utils/style/GlobalStyle';


ReactDOM.render(
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={ <Navigate to="/dashboard/18" /> } />
          <Route path="/dashboard/:userId" element={ <DashBoard /> } />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
