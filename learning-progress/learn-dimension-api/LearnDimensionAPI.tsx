import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default function LearnDimensionAPI() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>LearnDimensionAPI</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log({windowWidth, windowHeight});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '70%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: windowWidth > 500 ? 50 : 24,
  },
});
