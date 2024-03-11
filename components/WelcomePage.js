import { View, Text, StyleSheet } from "react-native"
import useAuth from "../hooks/useAuth"

const WelcomePage = () => {

    const {user} = useAuth()

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text>{user?.username}</Text>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 35,
    }
});