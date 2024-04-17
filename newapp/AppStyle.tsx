import React from 'react'

import{
    View,
    Text,
    StyleSheet,
    useColorScheme
}from 'react-native'


function AppStyle(): JSX.Element
{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', // horizontal 
        justifyContent: 'center' // vertical
    },
    whiteText: {
        color: 'orange'
    },
    darkText: {
        color: 'black'
    },
})
export default AppStyle
