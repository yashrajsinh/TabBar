import React from 'react';
//Tab Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../screens/tabs/HomeScreen';
import SearchScreen from '../../screens/tabs/SearchScreen';
import ProfileScreen from '../../screens/tabs/ProfileScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false, // hides top header
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
  );
};

export default Tabs;
