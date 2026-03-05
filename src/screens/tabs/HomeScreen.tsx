import { View, Text, Image } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.icon-icons.com/3761/PNG/512/house_building_home_icon_231030.png',
        }}
        style={{
          aspectRatio: 3 / 4,
          margin: 10,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
        }}
      >
        Welcome Home
      </Text>
    </View>
  );
}
