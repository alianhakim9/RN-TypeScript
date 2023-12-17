import React, {useState} from 'react';
import {ActivityIndicator, Button} from 'react-native';
import ContainerComponent from '../components/ContainerComponent';

export default function LearnActivityIndicator() {
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <ContainerComponent>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={isAnimate}
      />
      <Button
        title={isAnimate ? 'Hide loading indicator' : 'Show loading indicator'}
        onPress={() => setIsAnimate(!isAnimate)}
      />
    </ContainerComponent>
  );
}
