import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchScreen() {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" style={styles.icon} />

      <TextInput
        placeholder="Search sneakers, brands..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#F4F4F4',
    borderRadius: 25,

    paddingHorizontal: 10,
    height: 50,
    margin: 15,

    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111',
  },
});
