import {SectionList, StyleSheet, Text, View} from 'react-native';

import groupedData from './grouped.data.json';

export default function LearnSectionList() {
  return (
    <View style={styles.flatList}>
      <SectionList
        sections={groupedData}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 8,
            }}></View>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionText}>{section.type}</Text>
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
  sectionText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 12,
  },
});
