import {View, Text, StyleSheet} from 'react-native';

export default function LearnMultipleStyle() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={styles.title}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text style={styles.title}>Lightgreen box</Text>
      </View>
      {/* yang important style dengan index ke terakhir */}
      <View style={[styles.lightgreenBg, styles.box]}>
        <Text style={styles.title}>Lightgreen box</Text>
      </View>
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
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: 'red',
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen',
  },
});
