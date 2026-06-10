import axios from "axios";

const BASE_URL = "http://localhost/estate-management-api/api/";

// Instance for normal, authenticated requests
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Separate, clean instance specifically for refreshing tokens
// This prevents the interceptor from catching its own 401 errors
const axiosBase = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Automatically attach the access token to every outgoing request
axiosAuth.interceptors.request.use(
  (config) => {
    const tokensString = localStorage.getItem("tokens");
    if (tokensString) {
      const tokens = JSON.parse(tokensString);
      if (tokens?.access_token) {
        config.headers["Authorization"] = `Bearer ${tokens.access_token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor: Handle expired tokens (401)
axiosAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 and we haven't tried retrying this specific request yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark request to avoid infinite loops

      try {
        const tokensString = localStorage.getItem("tokens");
        if (!tokensString) throw new Error("No tokens found");

        const tokens = JSON.parse(tokensString);

        // Send refresh token to get a new access token
        const refreshResponse = await axiosBase.post("/auth/refresh", {
          refresh_token: tokens.refresh_token,
        });

        const newAccessToken = refreshResponse.data.tokens.access_token;

        // Update tokens in localStorage
        tokens.access_token = newAccessToken;
        localStorage.setItem("tokens", JSON.stringify(tokens));

        // Update the authorization header of the original failed request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry the original request with the new token
        return axiosAuth(originalRequest);
      } catch (refreshError) {
        console.error(
          "Refresh token expired or invalid. Logging out...",
          refreshError,
        );

        // Clear local storage and boot them to login
        localStorage.removeItem("tokens");
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
