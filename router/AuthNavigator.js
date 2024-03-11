import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from '../components/WelcomePage';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomePage} detachPreviousScreen/>
    </Stack.Navigator>
  )
}

export default AuthNavigator