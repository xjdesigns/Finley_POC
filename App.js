import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Finley from './finley.jsx';
import {BLEProvider} from './context/BLEContext.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <BLEProvider>
        <Finley />
      </BLEProvider>
    </Provider>
  );
}
