// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import axios from 'axios';

// export default function App() {
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = async() => {
//     const res =  fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,pricenpm')
//       // console.log('---', res.json());
//       .then(res => res.json())
//       .then(console.log);
//   };
//   // const res=await axios.get("https://dummyjson.com/products?limit=10&skip=10&select=title,pricenpm")
//   // console.log(res);
//   return (
//     <View>
//       <Text>jjApp</Text>
//     </View>
//   );
// }


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from './src/pages/splash/splash';
import intro from './src/pages/intro/intro';
import home from './src/pages/home/home';
import 'react-native-gesture-handler';
import login from './src/pages/login/login';
//import { Gesture } from 'react-native-gesture-handler';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<GestureHandlerRootView>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={splash}   options={{ headerShown: false }} />
        <Stack.Screen name="intro" component={intro}   options={{ headerShown: false }} />
        <Stack.Screen name="home" component={home}   options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login}   options={{ headerShown: false }} />

      </Stack.Navigator>
        </NavigationContainer>
        //</GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})

