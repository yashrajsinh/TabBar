import { Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SearchHeader() {
  return <Text style={styles.header}>Search</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15,
    color: '#111',
  },
});
