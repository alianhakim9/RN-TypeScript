import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function LearnTextInput() {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.greetText}>Hello {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  greetText: {
    margin: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
