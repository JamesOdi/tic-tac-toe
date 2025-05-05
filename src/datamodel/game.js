import { Alert } from 'react-native';

export const checkWinCondition = (newMap, reset) => {
  const winningCombinations = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
  ];
  for (const combination of winningCombinations) {
    const [box1, box2, box3] = combination;
    if (
      newMap[box1] !== undefined &&
      newMap[box2] !== undefined &&
      newMap[box3] !== undefined &&
      newMap[box1] === newMap[box2] &&
      newMap[box2] === newMap[box3]
    ) {
      Alert.alert('Congratulations!', `Player '${newMap[box1]}' wins!`, [
        { text: 'Reset Game?', onPress: reset },
      ]);
      return true;
    }

    if (Object.keys(newMap).length === 9) {
      Alert.alert('Game over', "It's a draw!", [
        { text: 'Reset Game?', onPress: reset },
      ]);
      return true;
    }
  }
};

export function handlePlay(
  idx,
  playedBoxes,
  setPlayedBoxes,
  currentPlayer,
  setCurrentPlayer,
  boxesMap,
  setBoxesMap,
  setUndoneBoxes
) {
  const playedBox = playedBoxes.find((v) => v.tileIdx == idx);
  if (playedBox !== undefined) {
    return;
  }
  const newPlayer = currentPlayer === 'X' ? 'O' : 'X';
  setPlayedBoxes([...playedBoxes, { tileIdx: idx, player: newPlayer }]);
  setCurrentPlayer(newPlayer);
  const newMap = { ...boxesMap, [idx]: newPlayer };
  setBoxesMap(newMap);
  const resetFunction = () =>
    resetGame(setBoxesMap, setPlayedBoxes, setCurrentPlayer, setUndoneBoxes);
  checkWinCondition(newMap, resetFunction);
}

export function resetGame(
  setBoxesMap,
  setPlayedBoxes,
  setCurrentPlayer,
  setUndoneBoxes
) {
  setBoxesMap({});
  setPlayedBoxes([]);
  setCurrentPlayer('O');
  setUndoneBoxes([]);
}

export function handleForwardBoxes(
  undoneBoxes,
  playedBoxes,
  setPlayedBoxes,
  boxesMap,
  setBoxesMap,
  setCurrentPlayer
) {
  if (undoneBoxes.length === 0) {
    return;
  }

  const lastUndoneBox = undoneBoxes.pop();
  setPlayedBoxes([...playedBoxes, lastUndoneBox]);
  const newMap = {
    ...boxesMap,
    [lastUndoneBox.tileIdx]: lastUndoneBox.player,
  };
  setCurrentPlayer(lastUndoneBox.player == 'X' ? '0' : 'X');
  setBoxesMap(newMap);
}

export function handleUndoBoxes(
  playedBoxes,
  undoneBoxes,
  setUndoneBoxes,
  boxesMap,
  setBoxesMap,
  setCurrentPlayer
) {
  if (playedBoxes.length === 0) {
    return;
  }

  const lastPlayedBox = playedBoxes.pop();
  setUndoneBoxes([...undoneBoxes, lastPlayedBox]);
  const newMap = { ...boxesMap };
  delete newMap[lastPlayedBox.tileIdx];
  setCurrentPlayer(lastPlayedBox.player);
  setBoxesMap(newMap);
}
