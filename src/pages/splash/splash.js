import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Splash() {
  const navigation=useNavigation();
  useEffect(()=>{
setTimeout(()=>{
  navigation.navigate("intro");


  },3000);
  
},[]);
  return (
    <View style={ styles.container}>
      <View style={styles.secview}> 
    
      <Text style={styles.firsttxt}>Quotes</Text>
      <Text style={styles.sectxt}>hub</Text>
      </View>
      <View style={styles.bottomview}>
        <Text style={styles.tagline}>all types of quotes you want to post</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secview:{
    flexDirection:"row",
  },
  firsttxt:{
    fontSize:27,
    color:"red",
  },
  sectxt:{
    fontSize:25,
    color:"black",
  },
  bottomview:{
    position:"absolute",
    bottom:20,
    justifyContent:"center",
    width:'100%',
    alignItems:"center",
  },
  tagline:{
    color:"red",
    fontWeight:"500",
    fontStyle:"italic",
  }
});
