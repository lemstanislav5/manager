import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import AuthService from "../api/auth";
import Preloader from '../components/preloader/Preloader';

const PrivateRoute = (props) => {
  const { Component } = props;
  const [isAuth, setIsAuth] = useState(null);
  const [isAuthInProgress, setIsAuthInProgress] = useState(null);

  useEffect(() => {
    if (isAuth === null && isAuthInProgress === null) {
      setIsAuthInProgress(true);
      AuthService.refreshToken()
        .then(res => {
          localStorage.setItem("token", res.data.token);
          setTimeout(() => setIsAuth(true), 1000);
        })
        .catch((err) => {
          console.log("login error", err);
        })
        .finally (() => {
          setTimeout(() => setIsAuthInProgress(false), 1000);
        });
    }
    
  }, []);


  if (isAuth === null && isAuthInProgress === null) {
    return <Preloader/>
  } else if (isAuth === null && isAuthInProgress === true) {
    return <Preloader/>
  } else if (isAuth === null && isAuthInProgress === false) {
    return <Navigate to="/signin" />;
  } else if (isAuth === true) {
    return <Component isAuth={isAuth}/>;
  } else {
    console.log(test);
    return <h1>ERR</h1>
  }

};

export default PrivateRoute;
