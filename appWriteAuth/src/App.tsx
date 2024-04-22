import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Singup';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: "Login"
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: "Home"
          }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{
            title: "SingUp"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
