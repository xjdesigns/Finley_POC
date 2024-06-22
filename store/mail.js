import {createSlice} from '@reduxjs/toolkit';
import {NOT_CONNECTED_STATUS, CONNECTED_STATUS} from '../constants/status';

const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    status: NOT_CONNECTED_STATUS,
    mail: [],
    selectedMail: null,
    isSearching: false,
  },
  reducers: {
    toggleConnection: state => {
      state.isConnected = !state.isConnected;
    },
    setMailStatus: (state, action) => {
      const {status} = action.payload;
      state.status = status;
    },
    setIsSearching: (state, action) => {
      const {isSearching} = action.payload;
      state.isSearching = isSearching;
    },
    setMail: (state, action) => {
      const {mail} = action.payload;
      return {...state, mail};
    },
    setSelectedMail: (state, action) => {
      const {selectedMail} = action.payload;
      return {...state, selectedMail};
    },
    ressetSelectedMail: state => {
      return {...state, selectedMail: null};
    },
  },
});

export const {
  toggleConnection,
  setMailStatus,
  setIsSearching,
  setMail,
  setSelectedMail,
  ressetSelectedMail,
} = mailSlice.actions;
export default mailSlice.reducer;
