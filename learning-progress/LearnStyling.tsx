import {View, Text, StyleSheet} from 'react-native';

export default function LearnStyling() {
  return (
    <View
      // inline styling : not recommended
      //   style={{
      //     flex: 1,
      //     backgroundColor: 'plum',
      //     padding: 60,
      //   }}
      //   recommended way
      style={styles.container}>
      <Text style={styles.title}>Stylesheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'plum',
    padding: 60,
  },
  title: {
    fontWeight: 'bold',
    color: 'midnightblue',
  },
});
