import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../../pages/exports';
import { useThemeCxt } from '@/style/exports';

const Tab = createBottomTabNavigator();

export default function BottomTabsAppNavigationStack() {
  const { theme } = useThemeCxt();

  return (
    <Tab.Navigator
      initialRouteName='dashboard'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: theme.baseHighlight,
        },
      }}>
      <Tab.Screen
        name='dashboard'
        component={Dashboard}
      />
    </Tab.Navigator>
  );
}
