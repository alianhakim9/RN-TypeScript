import React from 'react';
import {Text, View, Button} from 'react-native';

export default function LearnButton() {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 16,
        }}>
        Learn Button
      </Text>
      <Button
        title="Press"
        onPress={() => {
          console.log('clicked!');
        }}
        color="midnightblue"
      />
    </View>
  );
}
