import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  console.log("isAuthenticate",isAuthenticate)
  const navigate = useNavigate();
  useEffect(() => {
    // if (localStorage.getItem("user")) {
    //   setIsAuthenticate(true);
    //   navigate("/dashboard");
    // }
    if (!isAuthenticate &&!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, [isAuthenticate, navigate]);
  return (
    <AuthContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
