import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: 'Guest',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
