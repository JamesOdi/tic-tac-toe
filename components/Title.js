import { Text, StyleSheet } from 'react-native';
import { appGreen, appWhite } from '../constants/colors';

export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    width: 350,
    marginHorizontal: 50,
    backgroundColor: appGreen,
    textAlign: 'center',
    padding: 15,
    elevation: 8,
    color: appWhite,
    borderRadius: 10,
  },
});
