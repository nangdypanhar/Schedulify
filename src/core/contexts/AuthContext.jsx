import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const refreshTimer = useRef(null);
  const [token, setToken] = useState(
    localStorage.getItem("access_token") ||
      sessionStorage.getItem("access_token") ||
      null
  );
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser({
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
        });

        scheduleTokenRefresh(decodedToken.exp);
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
  }, [token]);

  const scheduleTokenRefresh = (exp) => {
    const currentTime = Date.now();
    const expTime = exp * 1000;
    const buffer = 10 * 1000;
    const timeout = expTime - currentTime - buffer;

    if (refreshTimer.current) {
      clearTimeout(refreshTimer.current);
    }

    if (timeout > 0) {
      refreshTimer.current = setTimeout(() => {
        getRefreshedToken();
      }, timeout);
    } else {
      logout();
    }
  };

  const login = (access_token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("access_token", access_token);
    } else {
      sessionStorage.setItem("access_token", access_token);
    }
    setToken(access_token);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("access_token");
    setToken(null);
    setUser({ id: "", name: "", email: "" });
    if (refreshTimer.current) {
      clearTimeout(refreshTimer.current);
    }
    navigate("/login");
  };

  const getRefreshedToken = async () => {
    try {
      const token =
        sessionStorage.getItem("access_token") ||
        localStorage.getItem("access_token");

      if (!token) {
        logout();
        return;
      }

      const response = await axios.post(
        "/user/auth/v1/refresh-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { refresh_token } = response.data;

      if (refresh_token) {
        if (sessionStorage.getItem("access_token")) {
          sessionStorage.setItem("access_token", refresh_token);
        } else {
          localStorage.setItem("access_token", refresh_token);
        }
        setToken(refresh_token);
      } else {
        logout();
      }
    } catch (err) {
      console.error("Failed to refresh token:", err);
      logout();
    }
  };

  const isAuthenticated = !!token;

  const auth = {
    token,
    login,
    logout,
    isAuthenticated,
    user,
  };

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
