import { isSessionExpired } from "../../utils/sessionUtils";

export const getSession = () => {
  const sessionData = localStorage.getItem("session");
  if (!sessionData) return null;

  const session = JSON.parse(sessionData);

  if (isSessionExpired(session.expiry)) {
    localStorage.removeItem("session");
    return null;
  }

  return session;
};
