import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
    padding: 5,
    margin: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // Android shadow
    elevation: 15,
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
