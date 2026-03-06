import { View, StyleSheet, FlatList, Alert, Text } from 'react-native';
import React from 'react';

//Data
import fragranceData from '../../data/fragranceData';

//UI (Componenet)
import ForYou from '../../components/ForYou/ForYou';
import TrendingChips from '../../components/Search/TrendingChips';
import SearchHeader from '../../components/Search/SearchHeader';
import SearchBar from '../../components/Search/SearchBar';

//Navigation Stack
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation<any>();

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
          <ForYou
            product={item}
            onPress={() => navigation.navigate('ITEMS_PAGE', { product: item })}
          />
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
