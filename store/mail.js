import {createSlice} from '@reduxjs/toolkit';
import {NOT_CONNECTED_STATUS, CONNECTED_STATUS} from '../constants/status';

const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    status: CONNECTED_STATUS,
    mail: [],
    isSearching: false,
  },
  reducers: {
    toggleConnection: state => {
      state.isConnected = !state.isConnected;
    },
    setStatus: (state, action) => {
      const {status} = action.payload;
      state.status = status;
    },
    setIsSearching: (state, action) => {
      const {isSearching} = action.payload;
      state.isSearching = isSearching;
    },
  },
});

export const {toggleConnection, setStatus, setIsSearching} = mailSlice.actions;
export default mailSlice.reducer;
