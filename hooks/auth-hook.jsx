import axios from 'axios';
import {useSelector} from 'react-redux';
import {AUTH_ENV_URL} from '../constants/url';

export function useAuthHook() {
  const env = useSelector(state => state.user.env);
  const envUrl = AUTH_ENV_URL[env];

  const authLogin = async (email, password) => {
    return axios.post(`${envUrl}/login`, {email, password});
  };

  const authRegister = async (firstName, lastName, email, password) => {
    return axios.post(`${envUrl}/register`, {
      firstName,
      lastName,
      email,
      password,
    });
  };

  return {
    authLogin,
    authRegister,
  };
}
