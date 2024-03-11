import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateUser from './components/CreateUser';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CreateUser />
    </>
  );
}

