import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  //   login the user using token

  const login = (userData, tokens) => {
    localStorage.setItem("tokens", tokens);
    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
  };


  const logout = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("user");

    setUser(null);
  };


  

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
