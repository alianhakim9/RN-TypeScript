import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import pokemonList from './data.json';

export default function LearnFlatList() {
  return (
    <View style={styles.flatList}>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => {
          return (
            <Pressable onPress={() => console.log(item.name)}>
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            </Pressable>
          );
        }}
        // horizontal
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
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
