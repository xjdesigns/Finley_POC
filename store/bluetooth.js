import {createSlice} from '@reduxjs/toolkit';

const bluetoothSlice = createSlice({
  name: 'mailbox',
  initialState: {
    isBluetoothConnected: false,
  },
  reducers: {
    setConnection: (state, action) => {
      const {isBluetoothConnected} = action.payload;
      state.isBluetoothConnected = isBluetoothConnected;
    },
  },
});

export const {setConnection} = bluetoothSlice.actions;
export default bluetoothSlice.reducer;
