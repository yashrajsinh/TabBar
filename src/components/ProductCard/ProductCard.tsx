import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { ProductsModel } from '../../models/ProductsModel';

type Props = {
  product: ProductsModel;
  onPress: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: product.imgURL }}
      />

      <Text numberOfLines={2}>{product.productTitle}</Text>
      <Text style={styles.price}>{product.productPrice}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 8,
  },

  image: {
    width: '100%',
    height: 130,
    alignSelf: 'center',
  },

  price: {
    fontWeight: 'bold',
  },
});
