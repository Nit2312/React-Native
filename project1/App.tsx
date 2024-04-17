import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadText from './components/HeadText'
import Status from './components/Status'
import ChatArea from './components/ChatArea'


const App = () => {
  return (
    <SafeAreaView>
      <HeadText></HeadText>
      <Status></Status>
      <ChatArea></ChatArea>
    </SafeAreaView>
  )
}

export default App