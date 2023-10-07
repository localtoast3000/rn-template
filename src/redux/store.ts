import Reactotron from 'reactotron-react-native';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from './reducers/user';

const persistorConfig = {
  key: 'diday',
  storage: AsyncStorage,
};

const reducers = {
  user,
};

export const store = configureStore({
  reducer: persistReducer(persistorConfig, combineReducers(reducers)),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  //@ts-ignore
  enhancers: __DEV__ ? [Reactotron.createEnhancer()] : [],
});

export const persistor = persistStore(store);
