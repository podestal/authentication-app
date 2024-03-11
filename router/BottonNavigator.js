import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import WelcomePage from '../components/WelcomePage'
import Grades from '../components/Grades'

const BottonNavigator = () => {

    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
        <Tab.Screen name='Welcome' component={WelcomePage}/>
        <Tab.Screen name='Grades' component={Grades}/>
    </Tab.Navigator>
  )
}

export default BottonNavigator