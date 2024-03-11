import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateUser from './components/CreateUser';
import AuthContextProvider from './context/auth';
import Login from './components/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {

  const queryClient = new QueryClient()

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <Login />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

