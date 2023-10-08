import React from 'react';
import { Provider as Redux } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate as RedxuPersist } from 'redux-persist/integration/react';
import NavigationStack from './navigation/stack';
import { ThemeContextProvider } from './style/exports';

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
      <ThemeContextProvider>
        <NavigationStack />
      </ThemeContextProvider>
    </RedxuPersist>
  );
}
