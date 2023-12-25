import 'react-native-gesture-handler';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './learning-progress/learn-navigation/RootStackParamList';
import TabNavigationApp from './learning-progress/learn-tab-navigation/TabNavigationApp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return <TabNavigationApp />;
}
