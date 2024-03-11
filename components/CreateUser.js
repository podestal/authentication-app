import { Text, View, ScrollView, StyleSheet, Button, Alert } from "react-native"
import Input from "./Input"
import { createUser } from "../api/api"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')

    const {mutate: createUserMutation} = useMutation({
        mutationFn: data => createUser(data),
        onSuccess: res => console.log(res),
        onError: err => console.log(err),
    })

    const handleSignup = () => {
        createUserMutation({ email, username, password })
        setEmail('')
        setUsername('')
        setPassowrd('')
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Input 
            label='Email'
            type='email-address' 
            value={email}
            setter={setEmail}
        />
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
        <Button onPress={handleSignup} title="Signup"/>
    </View>
  )
}

export default CreateUser


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    }
  });