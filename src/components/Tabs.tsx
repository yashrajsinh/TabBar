import React from 'react';
//Tab Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeScreen} />
      <Tab.Screen name="SEARCH" component={SearchScreen} />
      <Tab.Screen name="PROFILE" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default Tabs;
