import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerStackParamList} from './DrawerStackParamList';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export default function DrawerNavigationApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#756AB6',
          drawerContentStyle: {
            backgroundColor: '#FFE5E5',
          },
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'My Dashboard',
            drawerLabel: 'Dashboard Label',
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
    </NavigationContainer>
  );
}
