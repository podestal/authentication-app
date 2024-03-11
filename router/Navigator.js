import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../components/Login';
import CreateUser from '../components/CreateUser';
import WelcomePage from '../components/WelcomePage';
import useAuth from '../hooks/useAuth';

const Navigator = () => {

    const Stack = createNativeStackNavigator()
    const {user} = useAuth()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user?.access &&<Stack.Screen name='Welcome' component={WelcomePage}/>}
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={CreateUser} />
            </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigator