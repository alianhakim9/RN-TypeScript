import {View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box';

export default function LearnStyleInheritance() {
  return (
    <View style={styles.container}>
      <Box style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Box 1<Text style={styles.boldText}> With Bold</Text>
        </Text>
      </Box>
      <Box style={styles.darkMode}>
        <Text>Box 2</Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 20,
  },
  boxShadow: {
    shadowColor: 'blue',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  // only work for android
  androidShadow: {
    elevation: 10,
  },
  darkMode: {
    backgroundColor: 'black',
  },
  darkModeText: {
    color: 'green',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
