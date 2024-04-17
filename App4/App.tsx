import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): React.JSX.Element {
  
  const [randomBG, setRandomBG] = useState("#25CCF7")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color1 = "#"

    for (let i = 0; i < 6; i++) {
      color1 += hexRange[Math.floor(Math.random()*16)]
    }
    
    setRandomBG(color1)
  }

  return (
    <>
    <StatusBar backgroundColor={randomBG}/>
    <View style={[styles.container, {backgroundColor: randomBG}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={[styles.actionBtn1, {backgroundColor: randomBG}]}>
          <Text style={styles.actionBtnTxt1}>Press Me</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={generateColor}>
        <View style={[styles.actionBtn2, {backgroundColor: randomBG}]}>
          <Text style={styles.actionBtnTxt2}>Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn1:{
    borderRadius: 20,
    // backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionBtnTxt1:{
    fontSize: 15,
    color: 'black',
    textTransform: 'uppercase'
  },
  actionBtn2:{
    width: 120,
    height: 120,
    borderRadius: 60,
    // backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtnTxt2:{
    fontSize: 15,
    color: 'black',
    textTransform: 'uppercase'
  },
});

export default App;
