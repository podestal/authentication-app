import { View, Text, TextInput, StyleSheet } from "react-native"

const Input = ({ label, type, secure }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput  
            style={styles.input}
            keyboardType={type ? type : 'default'}
            secureTextEntry={secure}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    label: {
        fontSize: 14,
    },
    input: {
        backgroundColor: '#ecf0f1',
        borderRadius: 20,
        width: 240,
        padding: 8,
        marginVertical: 15,
        textAlign: 'center'
    }
})