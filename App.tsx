import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationApp from './learning-progress/learn-navigation/NavigationApp';
import {RootStackParamList} from './learning-progress/learn-navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return <NavigationApp />;
}
