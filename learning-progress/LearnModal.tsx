import React, {useState} from 'react';
import {Button, View, Modal, Text} from 'react-native';

export default function LearnModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
      }}>
      <Button
        title="show modal"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        // only effect in IOS not Android
        presentationStyle="pageSheet">
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightblue',
            padding: 60,
          }}>
          <Text
            style={{
              color: 'black',
            }}>
            Modal content
          </Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
