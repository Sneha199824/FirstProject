import React from "react";
import { View, Text, Image, Button } from 'react-native';
import { AddToCart } from "./Action";
import { useDispatch } from "react-redux";

export const Product = ({  }) => {
  const dispatch = useDispatch();  // Fixed: use 'useDispatch()' instead of 'useDispatch'
 const item =props.item
  const handleButton = () => {
    dispatch(AddToCart(item));  // Fixed: use 'dispatch' instead of 'Dispatch'
  }

  return (
    <View style={{ margin: 10, justifyContent: 'center', alignItems: 'center', width: 100, borderBottomWidth: 4, borderColor: 'green', width: 340, padding: 20 }}>
      <Image style={{ height: 100, width: 100 }} source={item.image} />
      <Text style={{ paddingLeft: 15, fontSize: 20, color: 'red' }}>{item.text}</Text>
      <Text style={{ paddingLeft: 15, fontSize: 20, color: 'green' }}>{item.price}</Text>
      <Button title="ADDTOCART"></Button>
    </View>
  );
}
