import { ScrollView, StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import Message from '../components/Message';
import MyButton from '../components/MyButton';
import InfoScreen from '../components/InfoScreen';

export default function Rules({ navigation }) {
  return (
    <InfoScreen
      navigation={navigation}
      title='Rules'
      message={`You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think.

But if you really wrap your brain around it,
you'll discover that Tic-Tac-Toe isn't quite
as simple as you think

Rules for Tic-Tac-Toe

1. The game is played on a grid that's 3 squares by 3 squares

2. You are X your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares

3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.`}
    ></InfoScreen>
  );
}
