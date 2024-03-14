import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  // const {jwt} = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user') || '{}') : null;
  // console.log("jwwt",jwt)
  const navigate = useNavigate();
const auth=true
  useEffect(() => {
    if (!isAuthenticate &&!auth ) {
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
