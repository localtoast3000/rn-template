import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing, SignUp, Login } from '../../screens/auth/exports';

export type AuthNavigationParamsList = {
  landing: undefined;
  'sign-up': undefined;
  login: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigationParamsList>();

export default function AuthNavigationStack() {
  return (
    <Stack.Navigator
      initialRouteName='landing'
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen
        name='landing'
        component={Landing}
      />
      <Stack.Screen
        name='sign-up'
        component={SignUp}
      />
      <Stack.Screen
        name='login'
        component={Login}
      />
    </Stack.Navigator>
  );
}
