/* eslint-disable react-refresh/only-export-components */
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AuthContext from "../src/Context/AuthContext.jsx";
import './App.css';
import { useState } from 'react';

// Create a wrapper functional component
const Main = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') === 'true'
  );

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth}}>
      <App />
    </AuthContext.Provider>
  );
};

// Render the app
createRoot(document.getElementById('root')).render(
  <Main />  // Render the wrapper component here
);
