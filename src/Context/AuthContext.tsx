import { createContext} from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext(
  {
    authenticated: false,
    loading: false,
    handleRegister: (data: object) => {},
    handleLogin: (data: object) => {},
    handleLogout: () => {},
  },
);

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleRegister, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleRegister, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };