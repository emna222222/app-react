
import Auth from './Screens/Auth'
import Home from './Screens/Home';
import NewAccount from './Screens/NewAccount'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown : false}}>
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="NewAccount" component={NewAccount} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
