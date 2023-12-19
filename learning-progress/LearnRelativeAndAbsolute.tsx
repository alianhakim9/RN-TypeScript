import {View, Text, StyleSheet} from 'react-native';
import Box from '../components/Box';

export default function LearnRelativeAndAbsolute() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: '#711DB0',
          position: 'relative',
          top: 75,
          left: 75,
        }}>
        Box 1
      </Box>
      <Box
        style={{
          backgroundColor: '#C21292',
        }}>
        Box 2
      </Box>
      <Box style={{backgroundColor: '#EF4040'}}>Box 3</Box>
      <Box
        style={{
          backgroundColor: '#FFA732',
          top: 100,
          left: 50,
          position: 'absolute',
        }}>
        Box 4
      </Box>
      <Box style={{backgroundColor: '#FFE382'}}>Box 5</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
});
