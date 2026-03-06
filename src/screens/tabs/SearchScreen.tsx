import { View, StyleSheet, FlatList, Alert, Text } from 'react-native';
import React from 'react';

import SearchHeader from '../../components/Search/SearchHeader';
import SearchBar from '../../components/Search/SearchBar';
import TrendingChips from '../../components/Search/TrendingChips';
import fragranceData from '../../data/fragranceData';
import ForYou from '../../components/ForYou/ForYou';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <SearchBar />
      <TrendingChips />
      <Text style={styles.title}> For You ❤️ </Text>
      <FlatList
        data={fragranceData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ForYou product={item} onPress={() => Alert.alert('Coming Soon !')} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  //Title
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
