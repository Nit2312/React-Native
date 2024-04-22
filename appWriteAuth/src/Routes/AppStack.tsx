import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'

export type AppStackParamlist = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamlist>();


export const appStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({})
export default appStack