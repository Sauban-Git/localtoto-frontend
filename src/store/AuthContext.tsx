import React from 'react';

type AuthContextValue = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextValue>({
  isLoggedIn: false,
  login: () => undefined,
  logout: () => undefined,
});

export const useAuth = () => React.useContext(AuthContext);

