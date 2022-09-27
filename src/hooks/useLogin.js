import { LoginContext } from '../contexts/loginContext/LoginContext';
import { useContext } from 'react';

export function useLogin() {
  const value = useContext(LoginContext);
  return value;
}