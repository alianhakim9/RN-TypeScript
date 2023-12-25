import {DrawerScreenProps} from '@react-navigation/drawer';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DrawerStackParamList} from '../DrawerStackParamList';

type Props = DrawerScreenProps<DrawerStackParamList, 'Dashboard'>;

export default function DashboardScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Pressable
        onPress={() => navigation.toggleDrawer()}
        style={styles.button}>
        <Text>Toggle Drawer</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.jumpTo('Settings')}
        style={styles.button}>
        <Text>Settings</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#756AB6',
    borderRadius: 60,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
