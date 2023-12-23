import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function AboutScreen({route, navigation}: Props) {
  const params = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {params?.name}</Text>
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: 'Alian',
          })
        }
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate('Home', {
            result: 'Data from about',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
});
