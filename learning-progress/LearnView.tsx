import React, {useState} from 'react';

import {Text, TouchableWithoutFeedback, View} from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View
      style={{
        display: 'flex',
        width: `100%`,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: bgColor,
      }}>
      <View
        style={{
          backgroundColor: 'lightblue',
          justifyContent: 'space-between',
          width: '100%',
          padding: 12,
        }}>
        <Text
          style={{
            color: 'black',
          }}>
          React Native App
        </Text>
      </View>
      <View
        style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 5,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setBgColor('red');
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'red',
                borderRadius: 80,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'white',
              }}></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setBgColor('green');
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'green',
                borderRadius: 80,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'white',
              }}></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              setBgColor('blue');
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'blue',
                borderRadius: 80,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'white',
              }}></View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'lightblue',
          padding: 12,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'gray',
          }}>
          Home
        </Text>
        <Text
          style={{
            color: 'gray',
          }}>
          Search
        </Text>
        <Text
          style={{
            color: 'gray',
          }}>
          Profile
        </Text>
      </View>
    </View>
  );
}
