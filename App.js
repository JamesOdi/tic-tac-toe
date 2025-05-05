import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Rules from './screens/Rules';
import Credits from './screens/Credits';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Rules' component={Rules} />
        <Stack.Screen name='Credits' component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
