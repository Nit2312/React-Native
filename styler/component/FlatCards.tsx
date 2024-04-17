import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// V I B G Y O R
export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.darkText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.darkText}>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.darkText}>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.darkText}>Green</Text>
        </View>
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red'
  },
  cardTwo: {
    backgroundColor: 'orange'
  },
  cardThree: {
    backgroundColor: 'yellow'
  },
  cardFour: {
    backgroundColor: 'green'
  },
  darkText: {
    color: 'black'
  }
})