import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal= {true} style={styles.container}>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>And</Text>
        </View>
        <View style = {[styles.cards, styles.cardElevated]}>
            <Text>Enjoy</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        // flex: 1,
        // alignSelf: 'center'
      },
      cards: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 8
      },

      cardElevated: {
        backgroundColor: 'violet',
        shadowOffset:{
            width: 1,
            height: 1,
        },
        shadowColor: 'orange',
      },
      container:{
        padding: 8,

      }
})