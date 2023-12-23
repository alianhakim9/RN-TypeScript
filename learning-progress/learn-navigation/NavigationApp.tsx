import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import {Alert, Pressable, StatusBar, Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5D3587',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          contentStyle: {
            backgroundColor: '#A367B1',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
            fullScreenGestureEnabled: true,
            headerRight: () => (
              <Pressable onPress={() => Alert.alert('Menu button pressed!')}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#FFD1E3',
                  }}>
                  Menu
                </Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: 'Guest',
          }}
          // options={({route}) => ({
          //   title: route.params?.name,
          // })}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="#392467" />
    </NavigationContainer>
  );
}
