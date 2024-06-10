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
  },
});

export const {initializeUser, setUserToken, setStatus} = userSlice.actions;
export default userSlice.reducer;
