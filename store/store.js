import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user.js';
import mailboxReducer from './mailbox.js';
import bluetoothReducer from './bluetooth.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    mailbox: mailboxReducer,
    bluetooth: bluetoothReducer,
  },
});

export default store;
