import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import ErrorContextProvider from './contexts/ErrorContext';
import AuthContextProvider from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
