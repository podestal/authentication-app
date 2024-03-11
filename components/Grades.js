import { View, Text, StyleSheet } from "react-native"

const Grades = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Grades</Text>
    </View>
  )
}

export default Grades

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