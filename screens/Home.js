import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { appBlack, appWhite, appYellow } from '../constants/colors';
import Title from '../components/Title';
import MyButton from '../components/MyButton';
import { Alert } from 'react-native';
import TButton from '../components/TButton';
import IconButton from '../components/IconButton';
import {
  checkWinCondition,
  handleForwardBoxes,
  handlePlay,
  handleUndoBoxes,
  resetGame,
} from '../src/datamodel/game';

export default function Home({ navigation }) {
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [boxesMap, setBoxesMap] = useState({});
  const [playedBoxes, setPlayedBoxes] = useState([]);
  const [undoneBoxes, setUndoneBoxes] = useState([]);

  const ticTacToeRowColumns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Title title='Tic Tac Toe'></Title>

      <View style={styles.gameHistoryNavigationContainer}>
        <IconButton
          iconName='chevron-back-outline'
          disabled={playedBoxes.length == 0}
          onPress={() =>
            handleUndoBoxes(
              playedBoxes,
              undoneBoxes,
              setUndoneBoxes,
              boxesMap,
              setBoxesMap,
              setCurrentPlayer
            )
          }
        />
        <MyButton
          text='New Game'
          onPress={() =>
            resetGame(
              setBoxesMap,
              setPlayedBoxes,
              setCurrentPlayer,
              setUndoneBoxes
            )
          }
        />
        <IconButton
          iconName='chevron-forward-outline'
          disabled={undoneBoxes.length == 0}
          onPress={() =>
            handleForwardBoxes(
              undoneBoxes,
              playedBoxes,
              setPlayedBoxes,
              boxesMap,
              setBoxesMap,
              setCurrentPlayer
            )
          }
        />
      </View>

      <View style={styles.playground}>
        {ticTacToeRowColumns.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((columnIndex) => (
              <TButton
                key={columnIndex}
                index={columnIndex}
                onPress={() =>
                  handlePlay(
                    columnIndex,
                    playedBoxes,
                    setPlayedBoxes,
                    currentPlayer,
                    setCurrentPlayer,
                    boxesMap,
                    setBoxesMap,
                    setUndoneBoxes
                  )
                }
                player={boxesMap[columnIndex]}
              />
            ))}
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 24, margin: 15 }}>
        Current Player: {currentPlayer == 'X' ? 'O' : 'X'}
      </Text>

      <View style={styles.footerButtonsContainer}>
        <MyButton
          onPress={() => navigation.navigate('Rules')}
          text='Rules'
        ></MyButton>
        <MyButton
          onPress={() => navigation.navigate('Credits')}
          text='Credits'
        ></MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appWhite,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  playground: {
    width: 350,
    height: 350,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: appYellow,
    borderWidth: 2,
    borderColor: appBlack,
  },
  row: {
    flexDirection: 'row',
  },
  footerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  gameHistoryNavigationContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
