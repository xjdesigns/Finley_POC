import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user.js';
import mailboxReducer from './mailbox.js';
import bluetoothReducer from './bluetooth.js';
import mailReducer from './mail.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    mailbox: mailboxReducer,
    bluetooth: bluetoothReducer,
    mail: mailReducer,
  },
});

export default store;
