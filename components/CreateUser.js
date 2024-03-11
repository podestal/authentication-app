import { Text, View, ScrollView, StyleSheet, Button, Alert } from "react-native"
import Input from "./Input"

const CreateUser = () => {

    const handleSignup = () => {
        Alert.alert('working!!!')
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Input 
            label='Email'
            type='email-address' 
        />
        <Input 
            label='Username'
        />
        <Input 
            label='Password'
            secure={true}
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