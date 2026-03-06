import { FlatList } from 'react-native';
import React from 'react';

//Navigation Stack
import { useNavigation } from '@react-navigation/native';

//Data
import products from '../../data/products';
//UI
import ProductCard from '../../components/ProductCard/ProductCard';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('PRODUCT_PAGE', { product: item })}
        />
      )}
    />
  );
}
