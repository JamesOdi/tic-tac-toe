import InfoScreen from '../components/InfoScreen';

export default function Credits({ navigation }) {
  return (
    <InfoScreen
      navigation={navigation}
      title='Credits'
      message={`In the realm of X's and 0's, upon the grid they go,
Where two contenders face off, in tic-tac-toe.
A pencil mark, a battle stark, lines cross like ancient runes,
Each player seeks, with tactic sleek, to align their threes and twos.

First goes X, with hopes to vex, in the corner she resides,
Then 0's response, a parry, a taunt, beside the X she slides.
The square becomes a battleground, where silent warriors clash,
With every mark, they leave their spark, in this timeless match.

A diagonal attempt, an intercept, the X's make their claim,
But 0 is shrewd, not easily subdued, and blocks the path to fame.
They dance in turns, the board it churns with symbols old as time,

A line unbroken, a token, a sign, of a strategy sublime`}
    ></InfoScreen>
  );
}
