import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import Tabs from './src/navigation/Tabs';
enableScreens();
function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
