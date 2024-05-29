import {createSlice} from '@reduxjs/toolkit';
import {WAITING_STATUS} from '../constants/status';

const mailboxSlice = createSlice({
  name: 'mailbox',
  initialState: {
    isConnected: false,
    status: WAITING_STATUS,
  },
  reducers: {
    toggleConnection: state => {
      state.isConnected = !state.isConnected;
    },
    setStatus: (state, action) => {
      const {status} = action.payload;
      state.status = status;
    },
  },
});

export const {toggleConnection, setStatus} = mailboxSlice.actions;
export default mailboxSlice.reducer;
