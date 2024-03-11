import { Text, View, ScrollView, StyleSheet, Button, Alert } from "react-native"
import Input from "./Input"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { login, getUser } from "../api/api"
import useAuth from "../hooks/useAuth"
import { useNavigation } from "@react-navigation/native"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')
    const {user, setUser} = useAuth()
    const navigator = useNavigation()

    const {mutate: getUserMutation} = useMutation({
        mutationFn: data => getUser(data),
        onSuccess: res => {
            setUser({ ...res.data})
        },
        onError: err => console.log(err),
    })

    const {mutate: loginMutation} = useMutation({
        mutationFn: (data) => login(data),
        onSuccess: res => {
            setUser({ ...res.data, isAuthenticated: true })
            // getUserMutation(res.data.access)
        },
        onError: err => console.log(err)
    })

    const handleLogin = () => {
        loginMutation({ username, password })
        setUsername('')
        setPassowrd('')
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Input 
            label='Username'
            value={username}
            setter={setUsername}
        />
        <Input 
            label='Password'
            secure={true}
            value={password}
            setter={setPassowrd}
        />
        <Button onPress={handleLogin} title="Login"/>
        <View style={styles.link}>
            <Text>Does not have an account yet?</Text>
            <Button onPress={() => {navigator.navigate('Signup')}} title="Create Account"/>
        </View>
    </View>
  )
}

export default Login


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
    },
    link: {
        marginVertical: 20,
    }
});