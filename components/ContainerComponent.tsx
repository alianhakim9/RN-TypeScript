import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ContainerComponent({children}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      {children}
    </View>
  );
}
