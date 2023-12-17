import {View, Text, StatusBar, Button} from 'react-native';
import React, {useState} from 'react';

export default function LearnStatusBar() {
  const [isStatusBarShow, setIsStatusBarShow] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      {/* only effect in android */}
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={isStatusBarShow}
      />
      <Button
        title={isStatusBarShow ? 'Show status bar' : 'Hide status bar'}
        onPress={() => setIsStatusBarShow(!isStatusBarShow)}
      />
    </View>
  );
}
