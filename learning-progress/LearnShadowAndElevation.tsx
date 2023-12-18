import {View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box';

export default function LearnShadowAndElevation() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: '#163020',
          height: 100,
        }}>
        <Text>Box 1</Text>
      </Box>
      <Box
        style={[
          {
            backgroundColor: '#304D30',
            height: 100,
            marginTop: 10,
          },
          styles.boxShadow,
          styles.androidShadow,
        ]}>
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
});
