import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Schedule, NewTask, Reports, Profile } from '../../../screens/app/exports';
import { useThemeCxt } from '@/style/exports';
import { CenterTabButton } from './tab-buttons/exports';

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
        name='home'
        component={Home}
      />
      <Tab.Screen
        name='schedule'
        component={Schedule}
      />
      <Tab.Screen
        name='new-task'
        component={NewTask}
        options={{
          tabBarButton: () => <CenterTabButton />,
        }}
      />
      <Tab.Screen
        name='reports'
        component={Reports}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
}
