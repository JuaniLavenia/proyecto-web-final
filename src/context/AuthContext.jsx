import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (tokenValue) => {
    setToken(tokenValue);
    localStorage.setItem("token", tokenValue);
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const authContextValues = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
