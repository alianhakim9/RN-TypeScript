import {StyleSheet, View} from 'react-native';
import Box from '../components/Box';

export default function LearnFlex() {
  return (
    <View style={styles.container}>
      {/* <Box
        style={{
          backgroundColor: '#711DB0',
          // alignSelf: 'flex-start'
          // flexBasis: 140,
          flexShrink: 1,
        }}>
        Box 1 shrink
      </Box>
      <Box
        style={{
          backgroundColor: '#C21292',
          flexShrink: 1,
        }}>
        Box 2 shrink
      </Box> */}
      <Box
        style={{
          backgroundColor: '#711DB0',
          // alignSelf: 'flex-start'
          // flexBasis: 140,
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
          flexGrow: 1,
        }}>
        Box 4
      </Box>
      <Box style={{backgroundColor: '#FFE382'}}>Box 5</Box>
      <Box
        style={{
          backgroundColor: '#FFAD84',
          flexGrow: 3,
        }}>
        Box 6
      </Box>
      <Box
        style={{
          backgroundColor: '#8ACDD7',
          // flex: 1
        }}>
        Box 7
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'baseline',
    // width: 300,
    // height: 300,
    // flexWrap: 'wrap',
    // alignContent: 'space-around',
    // rowGap: 8,
    // columnGap: 8,
    // gap: 4,
    borderWidth: 6,
    borderColor: 'red',
  },
});
