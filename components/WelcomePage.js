import { View, Text, StyleSheet } from "react-native"
import useAuth from "../hooks/useAuth"
import { useMutation } from "@tanstack/react-query"
import { useLayoutEffect } from "react"
import { getUser } from "../api/api"

const WelcomePage = () => {

    const {user} = useAuth()

    const {mutate: getUserMutation} = useMutation({
        mutationFn: data => getUser(data),
        onSuccess: res => {
            setUser({ ...res.data, ...user})
        },
        onError: err => console.log(err),
    })

    useLayoutEffect(() => {
        console.log('user from welcome', user)
        getUserMutation(user.access)
    }, [])

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