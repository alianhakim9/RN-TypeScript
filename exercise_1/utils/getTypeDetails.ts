export const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case 'electric':
      return {
        borderColor: '#FFD780',
        emoji: '⚡',
      };
    case 'water':
      return {
        borderColor: '#6493EA',
        emoji: '💧',
      };
    case 'fire':
      return {
        borderColor: '#FF5733',
        emoji: '🔥',
      };
    case 'grass':
      return {
        borderColor: '#66CC66',
        emoji: '🥬',
      };
    default:
      return {
        borderColor: '#A0A0A',
        emoji: '❓',
      };
  }
};
