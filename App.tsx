import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { ThemeProvider } from 'styled-components'
import Dashboard from './src/screens/Dashboard'
import theme from './src/global/styles/theme'

const App = () => {
    const [fontsLoader] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    })

    if (!fontsLoader) {
        return <AppLoading />
    }

    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
            <StatusBar style="auto" />
        </ThemeProvider>
    )
}

export default App
