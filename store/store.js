import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user.js';
import conversationReducer from './conversation.js';
import bluetoothReducer from './bluetooth.js';
import mailReducer from './mail.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    bluetooth: bluetoothReducer,
    mail: mailReducer,
  },
});

export default store;
