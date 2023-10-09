import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigationStack, BottomTabsAppNavigationStack } from './stacks/exports';
import { useAuthCxt } from './lib/auth-cxt';

export default function NavigationStack() {
  const { authenticated } = useAuthCxt();

  return (
    <NavigationContainer>
      {authenticated ? <BottomTabsAppNavigationStack /> : <AuthNavigationStack />}
    </NavigationContainer>
  );
}
