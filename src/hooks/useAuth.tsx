import { createContext, useContext, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { AuthContextType } from "./type/auth-context.type";



const AuthContext = createContext({} as AuthContextType);



export const AuthProvider = () => {
  const [user , setUser] = useLocalStorage("login");
  const navigate = useNavigate();

  const login = async (data: string) => {
    setUser(data);
    navigate("/");
  };



  const value = useMemo(
    () => ({
      user,
      login,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{<Outlet />}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};