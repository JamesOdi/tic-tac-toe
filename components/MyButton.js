import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { appBlue } from '../constants/colors';

export default function MyButton({ onPress, text }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: appBlue,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
});
