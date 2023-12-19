import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import pokemonList from './data.json';

export default function LearnList() {
  return (
    <ScrollView style={styles.scrollView}>
      {pokemonList.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardText}>{item.type}</Text>
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
});
