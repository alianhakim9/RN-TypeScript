import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function LearnTextInput() {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="email@example.com"
        // secureTextEntry // using this for password input
        // keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Text style={styles.greetText}>Hello {name}</Text>

      {/* Multiline Text Input */}

      <TextInput
        placeholder="Message"
        style={[styles.input, styles.multilineText]}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
  greetText: {
    margin: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
