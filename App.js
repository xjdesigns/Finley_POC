import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Finley from './finley.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <Finley />
    </Provider>
  );
}
