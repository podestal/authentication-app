import { StatusBar } from 'expo-status-bar';
import AuthContextProvider from './context/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavigator from './router/MainNavigator';

export default function App() {

  const queryClient = new QueryClient()

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <MainNavigator />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
