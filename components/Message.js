import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appDark, appWhite } from '../constants/colors';

export default function Message({ message }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appDark,
    flexDirection: 'column',
    height: '100%',
    width: 350,
    borderRadius: 15,
    padding: 20,
  },
  message: {
    fontSize: 20,
    paddingBottom: 50,
    color: appWhite,
  },
});
