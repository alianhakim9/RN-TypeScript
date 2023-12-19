import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
}

export default function CustomButton({onPress, title}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: 'purple',
    fontSize: 18,
  },
});
