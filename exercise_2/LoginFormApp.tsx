import {useState} from 'react';
import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Errors {
  username: string;
  password: string;
}

export default function LoginFormApp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({
    username,
    password,
  });

  const validateForm = () => {
    let errors: Errors = {
      username: '',
      password: '',
    };
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';

    return errors.username === '' && errors.password === '';
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log({username, password});
      setUsername('');
      setPassword('');
      setErrors({
        username: '',
        password: '',
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={require('../assets/exercise_1/pikachu.png')}
              style={styles.image}
            />
            <Text style={styles.label}>Username</Text>
            <TextInput
              placeholder="Enter your username"
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Enter your password"
              style={styles.input}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Button title="Login" onPress={() => handleSubmit()} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    marginBottom: 8,
  },
});
