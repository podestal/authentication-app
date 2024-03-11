import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';

const Navigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={CreateUser} />
        </Stack.Navigator>
    )
}

export default Navigator