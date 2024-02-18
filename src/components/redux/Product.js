// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import React from 'react';
// import { addToCart } from './action';

// export default function Product(props) {
//   const { name, price, color, image, item } = props;

//   const handleAddToCart = () => {
//     console.warn("hissam", item || { name, price, color, image });
//     // If you have a addToCart action, you can dispatch it like this
//     // addToCart(item || { name, price, color, image });
//   };

//   return (
//     <View style={{ alignItems: 'center', borderBottomWidth: 3 }}>
//       <Text style={{ fontSize: 20, color: 'red' }}>{name}</Text>
//       <Text style={{ fontSize: 20, color: 'red' }}>{price}</Text>
//       <Text style={{ fontSize: 20, color: 'red' }}>{color}</Text>
//       <Image style={{ width: 90, height: 120 }} source={{ uri: image }} />
//       <Button title='Add to cart' onPress={handleAddToCart} />
//     </View>
//   );
// }
