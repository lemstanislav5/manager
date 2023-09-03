import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import AuthService from "../api/auth";
import { Preloader } from '../components/preloader/Preloader';

const PrivateRoute = (props) => {
  const { Component } = props;
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    if (auth === null) {
      AuthService.messages()
        .then(res => {
          setTimeout(() => setAuth(true), 500);
          console.log('login: ', res);
        })
        .catch((err) => {
          console.error("Ошибка авторизации: ", err);
          setTimeout(() => setAuth(false), 500);
        })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (auth === null) return <Preloader />
  if (auth === true) return <Component />;
  if (auth === false) return <Navigate to="/login" />;
};

export default PrivateRoute;
