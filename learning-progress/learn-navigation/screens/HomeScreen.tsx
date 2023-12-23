import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({route, navigation}: Props) {
  const params = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {params?.result ? params?.result : 'Home Screen'}
      </Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate('About')}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
});
