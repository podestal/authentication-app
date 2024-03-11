import { Text, View, ScrollView, StyleSheet, Button, Alert } from "react-native"
import Input from "./Input"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { login } from "../api/api"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    const {mutate: loginMutation} = useMutation({
        mutationFn: (data) => login(data),
        onSuccess: res => console.log(res.data),
        onError: err => console.log(err)
    })

    const handleLogin = () => {
        loginMutation({ username, password })
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
    }
  });