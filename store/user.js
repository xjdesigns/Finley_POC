import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
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
  },
});

export const {initializeUser} = userSlice.actions;
export default userSlice.reducer;
