import { NavigationContainer as ReactNativeNavigationContainer } from '@react-navigation/native';
import AuthNavigationStack from './stacks/auth';
import { useAuthCxt } from './stacks/auth/cxt';
import BottomTabsAppNavigationStack from './stacks/app';

export default function NavigationContainer() {
  const { authenticated } = useAuthCxt();

  return (
    <ReactNativeNavigationContainer>
      {authenticated ? <BottomTabsAppNavigationStack /> : <AuthNavigationStack />}
    </ReactNativeNavigationContainer>
  );
}
