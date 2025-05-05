import { StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appBlue, appWhite } from '../constants/colors';

export default function IconButton({ iconName, disabled, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={32} color={appWhite} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: appBlue,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'lightgray',
  },
});
