import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AboutScreen from '../learn-tab-navigation/screens/AboutScreen';
import HomeScreen from '../learn-tab-navigation/screens/HomeScreen';
import {TabStackParamList} from './TabStackParamList';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function TabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
