import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

export default function LearnNetworking() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000ff" />
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={postList}
        renderItem={({item}) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.bodyText}>{item.body}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 8,
            }}
          />
        )}
        ListHeaderComponent={() => (
          <Text style={styles.headerText}>Post List</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.footerText}>End Of List</Text>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No Posts Found</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '300',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  emptyText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
