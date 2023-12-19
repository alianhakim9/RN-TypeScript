import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import {getTypeDetails} from '../utils/getTypeDetails';

interface Props {
  data: any;
}

export default function PokemonCard({data}: Props) {
  const {name, image, type, hp, moves, weaknesses} = data;

  const {borderColor, emoji} = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View
          style={[
            styles.badge,
            {
              borderColor: borderColor,
            },
          ]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(', ')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 0.5,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
  },
  typeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
