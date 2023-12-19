import React, {useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import LearnEmptyList from './learning-progress/learn-list/LearnEmptyList';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LearnEmptyList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f5f5f5',
  },
});
