import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.smallText}>Home Screen</Text> */}
      <Text style={styles.smallText}>Hi Badam</Text>
      <Button
        title='Go to detials'
        onPress={() => navigation.navigate("Details", {productId: "86"})}

        // onPress={() => navigation.navigate("Details")} but for this u have to convert details to undefined

      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    smallText:{
        color: 'black',
    }
})