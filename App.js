import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateUser from './components/CreateUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="auto" />
      <CreateUser />
    </QueryClientProvider>
  );
}

