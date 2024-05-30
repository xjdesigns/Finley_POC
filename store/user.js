import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
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
      return {...state, userToken: token};
    },
  },
});

export const {initializeUser, setUserToken} = userSlice.actions;
export default userSlice.reducer;
