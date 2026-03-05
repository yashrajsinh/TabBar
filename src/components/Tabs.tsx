import React from 'react';
//Tab Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
Image;
//Icons

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
            <Image
              source={require('../images/ic_home.png')}
              style={{
                width: focused ? 40 : 25,
                height: focused ? 40 : 25,
                opacity: focused ? 1 : 0.7,
              }}
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
                width: focused ? 40 : 25,
                height: focused ? 40 : 25,
                opacity: focused ? 1 : 0.7,
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
                width: focused ? 40 : 25,
                height: focused ? 40 : 25,
                opacity: focused ? 1 : 0.7,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
