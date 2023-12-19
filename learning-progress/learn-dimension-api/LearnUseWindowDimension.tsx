import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';

export default function LearnUseWindowDimension() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '70%',
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              fontSize: windowWidth > 500 ? 50 : 24,
            },
          ]}>
          LearnDimensionAPI
        </Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? '70%' : '90%',
    // height: windowHeight > 600 ? '60%' : '70%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'black',
    // fontSize: windowWidth > 500 ? 50 : 24,
  },
});
