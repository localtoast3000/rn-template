import { AppNavigationParamsList } from './stack';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export interface AppNavigation<Screen extends keyof AppNavigationParamsList> {
  navigation: NativeStackNavigationProp<AppNavigationParamsList, Screen>;
}
