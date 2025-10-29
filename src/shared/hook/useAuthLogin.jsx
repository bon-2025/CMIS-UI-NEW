import { useState, useEffect } from "react";
import { AuthLoginService } from "../service/AuthLoginService";

export const useAuthLogin = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = AuthLoginService.getSession();
    if (session) {
      setUser(session.user);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    AuthLoginService.saveSession(userData);
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    AuthLoginService.clearSession();
    setUser(null);
    setIsLoggedIn(false);
  };

  return { user, isLoggedIn, login, logout };
};
