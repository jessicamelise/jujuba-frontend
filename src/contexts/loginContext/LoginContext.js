import { createContext, useState } from 'react';

export const LoginContext = createContext({});

export function LoginContextProvider(props) {
  const [user, setUser] = useState();

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {props.children}
    </LoginContext.Provider>
  );
}
