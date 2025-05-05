import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { appWhite, appGreen, appBlack } from '../constants/colors';

export default function TButton({ onPress, player, index }) {
  // TButton refers to the tile button
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.player}>{player}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appGreen,
    borderWidth: 1,
    borderColor: appBlack,
  },
  player: {
    fontSize: 48,
    color: appWhite,
  },
});
