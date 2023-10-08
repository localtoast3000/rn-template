import React from 'react';
import { Provider as Redux } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate as RedxuPersist } from 'redux-persist/integration/react';
import NavigationStack from './navigation/stack';
import { StyleContextProvider } from './style/cxt';
import styleConfig from './style/style.config';

export default function App() {
  return (
    <Redux store={store}>
      <Index />
    </Redux>
  );
}

function Index() {
  return (
    <RedxuPersist persistor={persistor}>
      <StyleContextProvider config={styleConfig}>
        <NavigationStack />
      </StyleContextProvider>
    </RedxuPersist>
  );
}
