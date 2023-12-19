import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
// @ts-ignore
import CustomButton from '../components/CustomButton/CustomButton';

export default function LearnPlatformSpecificCode() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <CustomButton
          onPress={() => console.log('Button pressed')}
          title="Button"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    // only added to android device
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    // padding: 20,
  },
  text: {
    // using platform in more complex way
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
        fontStyle: 'italic',
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
