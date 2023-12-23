import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function AboutScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
      <Button title="Back to home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
