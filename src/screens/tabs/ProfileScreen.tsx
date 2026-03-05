import { View, Text, Image } from 'react-native';
import React from 'react';

export default function ProfileScreen() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.icon-icons.com/1485/PNG/512/find_102325.png',
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
        Profile
      </Text>
    </View>
  );
}
