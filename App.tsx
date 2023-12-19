import React, {useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return <SafeAreaView style={styles.safeContainer}></SafeAreaView>;
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
