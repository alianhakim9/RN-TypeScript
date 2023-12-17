import {Text, View} from 'react-native';

interface Props {
  name: string;
}

export default function Greet({name}: Props) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}
