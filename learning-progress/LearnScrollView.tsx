import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';

const catImg = require('../assets/cat.jpeg');

export default function LearnScrollView() {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 20,
            gap: 15,
          }}>
          <Image
            source={catImg}
            alt="cat"
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              textAlign: 'justify',
            }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            eligendi fugiat quia, tenetur aperiam dignissimos eaque quibusdam.
            Saepe illo corrupti quidem voluptas porro, earum assumenda aliquam
            aliquid harum itaque, quis, accusamus molestiae! Qui repellendus
            animi voluptatum voluptas veritatis omnis sequi laborum fuga? Minima
            ullam voluptatem laudantium. Dolorem vel reprehenderit sapiente
            ratione quis officiis cumque minima tempora, fugit et provident
            similique voluptates. Eum est, quae nemo aliquam explicabo illo
            nesciunt quidem voluptatem, sit nulla animi tempora itaque odit
            fugit aut quas natus qui magnam amet soluta magni dolorem voluptates
            ducimus fugiat. Rerum obcaecati, nesciunt quas ipsum at quasi
            voluptatum ea iure veniam ipsam? Sequi voluptate, in, nemo nam iure
            eveniet porro modi tempora aliquam esse numquam eos cum alias
            doloribus, dolorem autem! Eos at illum sed aliquam, esse saepe
            recusandae? Voluptatem odit voluptate ipsam! Eveniet aperiam
            dignissimos delectus maiores debitis pariatur reiciendis error et
            eius molestiae? Totam praesentium culpa harum laborum!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
