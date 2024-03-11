import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
import AuthNavigator from './AuthNavigator';
import useAuth from '../hooks/useAuth';

const MainNavigator = () => {

    const {user} = useAuth()

  return (
    <NavigationContainer>
        {user.isAuthenticated && <AuthNavigator />}
        {!user.isAuthenticated && <Navigator />}
    </NavigationContainer>
  )
}

export default MainNavigator