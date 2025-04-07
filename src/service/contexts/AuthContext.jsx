    import { jwtDecode } from "jwt-decode";
    import { createContext, useContext, useState, useEffect } from "react";

    const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [token, setToken] = useState(
        localStorage.getItem("access_token") || null
      );
      const [user, setUser] = useState({
        name: "",
        email: "",
      });

      useEffect(() => {
        if (token) {
          try {
            const decodedToken = jwtDecode(token);
            if (decodedToken.name && decodedToken.email) {
              setUser({
                name: decodedToken.name,
                email: decodedToken.email,
              });
            }
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        }
      }, [token]);

      const login = (access_token, rememberMe) => {
        if (!rememberMe) {
          sessionStorage.setItem("access_token", access_token);
        } else {
          localStorage.setItem("access_token", access_token);
        }
        setToken(access_token);
        console.log("Logged in with token:", access_token);
      };

      const logout = () => {
        localStorage.removeItem("access_token");
        setToken(null);
        setUser({ name: "", email: "" });
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
