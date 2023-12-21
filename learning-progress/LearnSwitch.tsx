import {useState} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';

export default function LearnSwitch() {
  const [name, setName] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

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

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setDarkMode(prevState => !prevState)}
          trackColor={{
            false: '#768577',
            true: 'lightblue',
          }}
          thumbColor="red"
        />
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: 'bold',
  },
});
