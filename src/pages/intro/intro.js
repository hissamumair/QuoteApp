import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//import {FlatList} from 'react-native-gesture-handler';
const data = [
  require('./../../assets/svg/chat.png'),
  require('./../../assets/svg/text.png'),
  require('./../../assets/svg/quote.png'),
];
const {height, width} = Dimensions.get('screen');
export default function Intro() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.listview}>
        <FlatList
          //horizontal={true}
          data={data}
          pagingEnabled // Enable paging
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemView}>
                <Image source={item} style={styles.imagestyle} />
                <Text style={styles.listtxt}>Hello Hissam</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.bottomview}>

      <TouchableOpacity style={styles.continoueButton} onPress={()=>{
        navigation.navigate("home")
      }}>
        <Text style={styles.buttonText}>Continue To Home</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:"green",
  },
  itemView: {
    width: width,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
//backgroundColor: 'yellow',
  },

  imagestyle: {
    width: 200,
    height: 200,
  },
  listview: {
    //marginTop: 100,
    height: 250,
  },
  bottomview: {
    position: 'absolute',
    bottom: 60,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:"black",
  },
  continoueButton: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:"center",
    width: '80%',
    height: 50,
    borderRadius: 10,
    //backgroundColor:"red",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  listtxt:{
    fontSize:20,
    fontWeight:"600",
    marginTop:20,
  },
});
