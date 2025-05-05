import { View, StyleSheet } from 'react-native';
import Title from './Title';
import Message from './Message';
import MyButton from './MyButton';

export default function InfoScreen({
  navigation,
  title,
  message,
  buttonText = 'Back',
}) {
  return (
    <View style={styles.container}>
      <Title title={title}></Title>
      <Message message={message}></Message>
      <MyButton
        text={buttonText}
        onPress={() => navigation.goBack()}
      ></MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
});
