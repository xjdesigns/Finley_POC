import React, {createContext, useReducer, useContext} from 'react';

const initialState = {
  manager: null,
};

export const BLEContext = createContext(undefined);

export const SET_MANAGER_TYPE = 'SET_MANAGER';

const bleReducer = (state, action) => {
  switch (action.type) {
    case SET_MANAGER_TYPE: {
      return {
        ...state,
        manager: action.payload.manager,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const BLEProvider = ({children}) => {
  const [state, dispatch] = useReducer(bleReducer, initialState, undefined);
  return (
    <BLEContext.Provider value={[state, dispatch]}>
      {children}
    </BLEContext.Provider>
  );
};

const useBLEContext = () => {
  const context = useContext(BLEContext);
  if (context === undefined) {
    throw new Error('useBLEContext must be used within a BLEProvider');
  }
  return context;
};

export {BLEProvider, useBLEContext};
