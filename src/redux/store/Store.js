import { applyMiddleware, combineReducers, createStore } from "redux";
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { RegisterReducer} from "../reducers/RegisterReducer";
import { LoginReducer} from "../reducers/LoginReducer";


const persistConfig = {
    key: 'root',
    storage: AsyncStorageLib,
    whitelist: [
      'RegisterReducer',
      'LoginReducer',
    ],
  };

  const rootReducer = combineReducers ({
   RegisterReducer,
   LoginReducer
  });

const persistedReducer = persistReducer (persistConfig, rootReducer);
const store = createStore (persistedReducer, applyMiddleware (thunk));
let persistor = persistStore (store);

export {store, persistor};

// export const store=createStore(RegisterReducer);
