import React, { createContext, useState } from "react";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const AuthContext = createContext();

  const logIn = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
