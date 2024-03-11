import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from '../components/WelcomePage';
import BottonNavigator from './BottonNavigator';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Welcome' component={BottonNavigator} detachPreviousScreen/>
    </Stack.Navigator>
  )
}

export default AuthNavigator