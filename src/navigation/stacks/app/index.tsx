import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Schedule, NewTask, Reports, Profile } from '@/screens/app/exports';
import { CustomTabBar } from './tab-bar';

const Tab = createBottomTabNavigator();

export default function BottomTabsAppNavigationStack() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName='dashboard'
      screenOptions={{ headerShown: false }}>
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
