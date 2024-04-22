import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
// REACT native element
import { FAB } from '@rneui/themed'
import Snackbar from 'react-native-snackbar'
import { appWriteContext } from '../AppWrite/appWriteContext'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {AuthStackParamList} from '../Routes/AuthStack'
type HomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Home'>

type Userobj = {
  name: string;
  email: string;
}
const Home = ({navigation}: HomeScreenProps) => {
  const [userData, setUserData] = useState<Userobj>()
  const { appwrite, SetIsloggedIn } = useContext(appWriteContext)
  const handleLogout = () => {
    appwrite.logOut()
      .then(() => {
        SetIsloggedIn(false);
        Snackbar.show({
          text: 'Logout Succesfully',
          duration: Snackbar.LENGTH_SHORT,
        })
        navigation.navigate('Login')
      })
  }

  useEffect(() => {
    appwrite.getCurrentUser()
      .then(Response => {
        if (Response) {
          const user: Userobj = {
            name: Response.name,
            email: Response.email,
          }
          setUserData(user)
        }
      })
  }, [appwrite])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={{
            uri: 'https://appwrite.io/images-ee/blog/og-private-beta.png',
            width: 400,
            height: 300,
            cache: 'default',
          }}
          resizeMode="contain"
        />
        <Text style={styles.message}>
          Build Fast. Scale Big. All in One Place.
        </Text>
        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}
      </View>
      <FAB
        placement="right"
        color="#f02e65"
        size="large"
        title="Logout"
        icon={{ name: 'logout', color: '#FFFFFF' }}
        onPress={handleLogout}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0D32',
  },
  welcomeContainer: {
    padding: 12,

    flex: 1,
    alignItems: 'center',
  },
  message: {
    fontSize: 26,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userContainer: {
    marginTop: 24,
  },
  userDetails: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
export default Home
