import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export default function Box({children, style}: Props) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 10,
    // width: 50,
    // height: 50,
    flexGrow: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
