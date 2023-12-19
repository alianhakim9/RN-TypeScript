import React, {useState} from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import PokemonCard from './exercise_1/components/PokemonCard';
import {charmanderData} from './exercise_1/components/content';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <PokemonCard data={charmanderData} />
        <PokemonCard data={charmanderData} />
        <PokemonCard data={charmanderData} />
        <PokemonCard data={charmanderData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
