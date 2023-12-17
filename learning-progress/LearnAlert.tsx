import React from 'react';
import {Alert, Button} from 'react-native';
import ContainerComponent from '../components/ContainerComponent';

export default function LearnAlert() {
  return (
    <ContainerComponent>
      <Button title="Alert" onPress={() => Alert.alert('Invalid data!')} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert('Invalid data!', 'DOB incorrect')}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert('Invalid data!', 'DOB incorrect', [
            {
              text: 'Cancel',
              onPress: () => console.log('cancel pressed'),
            },
            {
              text: 'OK',
              onPress: () => console.log('OK pressed'),
            },
          ])
        }
      />
    </ContainerComponent>
  );
}
