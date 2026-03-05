import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './src/components/Tabs/Tabs';
import { enableScreens } from 'react-native-screens';
enableScreens();
function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
