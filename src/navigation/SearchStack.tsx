import { View, Text } from 'react-native';
import React from 'react';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SearchScreen from '../screens/tabs/SearchScreen';
import ItemsPage from '../screens/ItemsPage';

const SearchStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SEARCH_MAIN" component={SearchScreen} />
      <Stack.Screen name="ITEMS_PAGE" component={ItemsPage} />
    </Stack.Navigator>
  );
};

export default SearchStack;
