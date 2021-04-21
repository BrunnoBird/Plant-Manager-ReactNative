import React from 'react';
import AppLoadging from 'expo-app-loading';
import Routes from './src/routes';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  })
  if (!fontsLoaded) {
    return <AppLoadging />
  }
  return (
    <Routes />
  )
}