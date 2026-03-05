import { View, Text, Image } from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.icon-icons.com/39/PNG/128/find_search_locate_6312.png',
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
        Search
      </Text>
    </View>
  );
}
