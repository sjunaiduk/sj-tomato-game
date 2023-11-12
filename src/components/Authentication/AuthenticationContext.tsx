import { ReactNode, createContext, useState } from "react";
import {
  addUserToStorageAndSetLoggedInUser,
  clearUserFromStorage,
} from "../../services/login-manager";
import User from "../../models/User";

interface AuthenticationContextType {
  login: (user: User) => void;
  logout: () => void;
  user: User | null;
}

export const authContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);
interface Props {
  children: ReactNode;
}
export const AuthenticationContext = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const logout = () => {
    setUser(null);
    clearUserFromStorage();
  };

  const login = (user: User) => {
    setUser(user);
    addUserToStorageAndSetLoggedInUser(user);
  };
  return (
    <authContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
