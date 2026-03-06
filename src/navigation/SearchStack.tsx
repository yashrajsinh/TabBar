import { View, Text } from 'react-native';
import React from 'react';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>SearchStack</Text>
    </View>
  );
};

export default SearchStack;
