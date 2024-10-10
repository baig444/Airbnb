/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import  AuthContext  from '../Context/AuthContext'; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;