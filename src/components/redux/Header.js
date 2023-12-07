import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartData = useSelector((state) => state.Reducer);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartData);
  }, [cartData]);

  return (
    <View style={{ backgroundColor: 'orange' }}>
      <Text style={{ fontSize: 20, padding: 20, textAlign: 'right', color: 'yellow' }}>{count}</Text>
    </View>
  );
};
