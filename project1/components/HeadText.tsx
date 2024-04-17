import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeadText() {
  return (
    <View>
      <Text style={styles.headingText}>WhatsApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    alignSelf: 'center', 
    marginBottom: 10
  }
})