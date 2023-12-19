import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import emptyList from './empty-data.mock.json';

export default function LearnEmptyList() {
  return (
    <View style={styles.flatList}>
      <FlatList
        data={emptyList}
        renderItem={(item: any) => {
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
        keyExtractor={(item: any) => item.id.toString()}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator}></View>;
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Image
              source={{
                uri: 'https://cdni.iconscout.com/illustration/premium/thumb/search-not-found-8291000-6632131.png?f=webp',
              }}
              accessibilityLabel={`empty state`}
              resizeMode="contain"
              style={styles.emptyImg}
            />
            <Text style={styles.emptyText}>No Items Found</Text>
          </View>
        )}
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
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  emptyImg: {
    width: '100%',
    height: 256,
  },
});
