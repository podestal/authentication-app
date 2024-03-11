import { StatusBar } from 'expo-status-bar';
import AuthContextProvider from './context/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigator from './router/Navigator';

export default function App() {

  const Stack = createNativeStackNavigator()

  const queryClient = new QueryClient()

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <Navigator />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}


// 
// <Login />