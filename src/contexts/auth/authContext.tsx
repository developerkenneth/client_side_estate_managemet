import axios from "axios";
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

  // refresh token
  const refreshAccessToken = async () => {
    try {
      const accessToken =
        localStorage.getItem("refreshToken") ??
        localStorage.getItem("refreshToken");
      const response = await axios.post(
        "http://localhost/estate-management-api/api/auth/refresh",
        { refresh_token: accessToken },
      );

      return response.data.tokens?.access_token;
    } catch (err) {
      if (err.response.data) {
        console.log(err.response.message);
        return;
      }
    }
  };

  api.interceptors.response.use(
(response) => response,

    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({
              resolve,
              reject,
            });
          })
            .then((token) => {
              originalRequest.headers["Authorization"] = "Bearer " + token;

              return api(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        isRefreshing = true;

        try {
          const newToken = await refreshAccessToken();

          localStorage.setItem("accessToken", newToken);

          api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

          processQueue(null, newToken);

          return api(originalRequest);
        } catch (err) {
          processQueue(err, null);

          localStorage.removeItem("accessToken");

          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    },
  );

  // set access token
  function setAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
    return;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        setRefresh,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
