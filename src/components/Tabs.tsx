import React from 'react';
//Tab Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
Image;
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={26}
              color={focused ? '#000' : '#888'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SEARCH"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/ic_search.png')}
              style={{
                width: focused ? 45 : 25,
                height: focused ? 45 : 25,
                opacity: focused ? 1 : 0.6,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../images/ic_profile.png')}
              style={{
                width: focused ? 45 : 25,
                height: focused ? 45 : 25,
                opacity: focused ? 1 : 0.6,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
