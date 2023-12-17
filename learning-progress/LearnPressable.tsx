import React from 'react';
import {Text, View, Pressable} from 'react-native';

export default function LearnPressable() {
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
        Learn Pressable
      </Text>
      <Pressable
        onPress={() => {
          console.log('Text pressed!');
        }}>
        <Text>Press Here</Text>
      </Pressable>
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 16,
          marginTop: 16,
        }}>
        Custom Button Using Pressable
      </Text>
      <Pressable
        style={{
          backgroundColor: 'navy',
          padding: 12,
          borderRadius: 16,
          display: 'flex',
          alignItems: 'center',
        }}
        onHoverIn={() => {
          console.log('hover in');
        }}
        onHoverOut={() => {
          console.log('hover out');
        }}
        onPress={() => {
          console.log('custom button pressed');
        }}
        onPressIn={() => {
          console.log('on press in');
        }}
        onPressOut={() => {
          console.log('on press out');
        }}
        onLongPress={() => {
          console.log('on long press');
        }}>
        <Text
          style={{
            width: 100,
          }}>
          Custom Button
        </Text>
      </Pressable>
    </View>
  );
}
