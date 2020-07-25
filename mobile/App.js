import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/Store';

export default () =>{
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
      </PersistGate>
    </Provider>
  );
}