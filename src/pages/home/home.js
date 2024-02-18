import { StyleSheet, Text, View ,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes");
    const result = await response.json();
    setData(result.data); // Access the data property of the result
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quotes</Text>
        <Text style={styles.subtitle}>hub</Text>
      </View>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.open}source={require("../../assets/svg/open.png")}/>
            <Text style={styles.text}>{item.quoteText}</Text>
            <Text style={styles.author}>- {item.quoteAuthor}</Text>
          </View>
        )}
       // keyExtractor={(item) => item._id} // Use a unique identifier for the key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
  },
  header:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  title: {
    fontSize: 26,
    color: "red",
    fontWeight:"bold",
  },
  subtitle: {
    fontSize: 25,
    color: "black",
    //fontWeight:"bold",

  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight:"bold",
    color:"red",
  },
  open:{
    height:30,
    width:30,
  }
});
