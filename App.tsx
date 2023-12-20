import React, {useState} from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import LearnSectionList from './learning-progress/learn-list/LearnSectionList';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <LearnSectionList />
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
