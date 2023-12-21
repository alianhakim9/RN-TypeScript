import React, {useState} from 'react';

// import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import LoginFormApp from './exercise_2/LoginFormApp';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <LoginFormApp />
    // <SafeAreaView style={styles.safeContainer}>

    // </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#f5f5f5',
//   },
// });
