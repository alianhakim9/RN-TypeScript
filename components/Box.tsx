import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export default function Box({children, style}: Props) {
  return <View style={[styles.box, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
});
