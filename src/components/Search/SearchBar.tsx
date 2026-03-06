import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" />

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
    paddingHorizontal: 15,
    height: 50,
    margin: 15,
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});
