import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';

const logoImg = require('../assets/cat.jpeg');

export default function LearnImage() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        gap: 5,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        Image Biasa
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
        }}>
        {/* local image */}
        <Image
          source={logoImg}
          alt="Cat"
          style={{
            width: 100,
            height: 100,
            borderRadius: 5,
            marginTop: 10,
          }}
        />
        {/* remove image */}
        <Image
          source={{
            uri: 'https://picsum.photos/300',
          }}
          alt="Remote source"
          style={{
            width: 100,
            height: 100,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        Image as Background
      </Text>
      <View>
        <ImageBackground
          source={logoImg}
          style={{
            padding: 12,
            borderRadius: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 150,
          }}>
          <Text>IMAGE TEXT</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
