import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {CommonTextInput} from './src/components/CommonTextInput';
import {StackNav} from './src/navigation/StackNav';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/Store';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
