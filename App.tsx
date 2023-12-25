import 'react-native-gesture-handler';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigationApp from './learning-progress/learn-drawer-navigation/DrawerNavigationApp';
import {RootStackParamList} from './learning-progress/learn-navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return <DrawerNavigationApp />;
}
