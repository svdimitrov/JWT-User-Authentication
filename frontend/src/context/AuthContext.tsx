import { createContext } from "react";

type AuthContextType = {
  name: string,
}

const AuthContext = createContext<AuthContextType>({"name": ""});

export default AuthContext;

export const AuthProvider = (props: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={{ "name": "stefan" }}>
      {props.children}
    </AuthContext.Provider>
  );
};