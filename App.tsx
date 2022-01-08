import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
