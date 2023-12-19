import React, {useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import LearnItemSeparator from './learning-progress/learn-list/LearnItemSeparator';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LearnItemSeparator />
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
