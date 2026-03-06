import { View, StyleSheet } from 'react-native';
import React from 'react';

import SearchHeader from '../../components/Search/SearchHeader';
import SearchBar from '../../components/Search/SearchBar';
import TrendingChips from '../../components/Search/TrendingChips';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchBar />
      <TrendingChips />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
