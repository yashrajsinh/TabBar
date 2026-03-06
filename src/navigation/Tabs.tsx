import React from 'react';
//Tab Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//Navaigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductPage from '../screens/ProductPage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false, // hides top header
            tabBarStyle: {
              position: 'absolute', // make it float a bit
              elevation: 7,
              marginLeft: 40,
              marginRight: 40,
              bottom: 2,
              backgroundColor: '#F4F2EC',
              borderRadius: 20,
              height: 50,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            },
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'HOME') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'SEARCH') {
                iconName = focused ? 'search' : 'search-outline';
              } else if (route.name === 'PROFILE') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return (
                <Ionicons
                  name={iconName}
                  size={26}
                  color={focused ? '#000' : '#888'}
                />
              );
            },
          })}
        >
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen name="SEARCH" component={SearchScreen} />
          <Tab.Screen name="PROFILE" component={ProfileScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Tabs;
