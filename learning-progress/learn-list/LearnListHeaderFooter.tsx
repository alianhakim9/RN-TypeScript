import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import pokemonList from './data.json';

export default function LearnListHeaderFooter() {
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
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator}></View>;
        }}
        ListHeaderComponent={() => {
          return <Text style={styles.headerText}>Pokemon List</Text>;
        }}
        ListFooterComponent={() => {
          return <Text style={styles.footerText}>End Of List</Text>;
        }}
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
    // marginBottom: 16,
  },
  cardText: {
    fontSize: 30,
  },
  itemSeparator: {
    height: 4,
    backgroundColor: 'black',
    borderRadius: 1000,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 12,
  },
});
