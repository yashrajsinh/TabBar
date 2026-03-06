import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const trending = [
  'Nike Dunk',
  'Air Jordan',
  'Yeezy 350',
  'Adidas Samba',
  'New Balance',
];

export default function TrendingChips() {
  return (
    <>
      <Text style={styles.title}>Trending Searches 🔥 </Text>

      <View style={styles.container}>
        {trending.map((item, index) => (
          <TouchableOpacity key={index} style={styles.chip}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 15,
    marginBottom: 10,
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
  },

  chip: {
    backgroundColor: '#F1F1F1',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
});
