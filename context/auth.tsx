"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export type UserType = {
  name: string;
};

type ProviderProps = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};
export const AuthContext = createContext<ProviderProps>({} as ProviderProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  // Initialize state from localStorage only on client side
  useEffect(() => {
    (function checkStorage() {
      const storedUser = window.localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing stored user:", error);
          window.localStorage.removeItem("user");
        }
      }
    })();
  }, []);

  // Update localStorage when user changes
  useEffect(() => {
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};
