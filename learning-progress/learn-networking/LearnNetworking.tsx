import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
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
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const data = await response.json();
      setPostList(data);
      setError('');
    } catch (error) {
      console.log(`Error fetching data`);
      setError('Failed to fetch post list');
    } finally {
      setIsLoading(false);
    }
  };

  // pull to request
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        },
      );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle('');
      setPostBody('');
      setIsPosting(false);
      setError('');
    } catch (error) {
      console.log(`Error adding new post`);
      setError('Failed to add new post');
    } finally {
      setIsLoading(false);
    }
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
    <>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
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
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? 'Adding...' : 'Add Post'}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
        </>
      )}
    </>
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
  inputContainer: {
    backgroundColor: '',
    padding: 18,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: 'red',
    padding: 18,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
  },
});
