import {createSlice} from '@reduxjs/toolkit';
import {LOADING_STATUS, LOADED_STATUS} from '../constants/status';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: LOADING_STATUS,
    isLoggedIn: false,
    userToken: '',
    user: {
      firstName: '',
      lastName: '',
      email: '',
    },
    env: 'dev',
  },
  reducers: {
    initializeUser: (state, action) => {
      const {user} = action.payload;
      return {...state, ...user};
    },
    setUserToken: (state, action) => {
      const {token} = action.payload;
      return {...state, userToken: token, status: LOADED_STATUS};
    },
    setStatus: (state, action) => {
      const {status} = action.payload;
      return {...state, status};
    },
    updateEnv: (state, action) => {
      const {env} = action.payload;
      return {...state, env};
    },
  },
});

export const {initializeUser, setUserToken, setStatus, updateEnv} =
  userSlice.actions;
export default userSlice.reducer;
