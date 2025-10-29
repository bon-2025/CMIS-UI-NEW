import { createContext, useContext } from "react";
import { useAuthLogin } from "../hook/useAuthLogin";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ Call the useAuth hook here
  const { user, isLoggedIn, login, logout } = useAuthLogin();

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Export a helper hook to use this context anywhere
export const useAuthContext = () => useContext(AuthContext);
