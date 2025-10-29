// src/service/AuthService.js
import { saveSession } from "./LoginAuth/saveSession.jsx";
import { getSession } from "./LoginAuth/getSession.jsx";
import { clearSession } from "./LoginAuth/clearSession.jsx";

export const AuthLoginService = {
  saveSession: (user) => {
    saveSession(user);
  },

  getSession: () => {
    return getSession();
  },

  clearSession: () => {
    clearSession();
  },
};
