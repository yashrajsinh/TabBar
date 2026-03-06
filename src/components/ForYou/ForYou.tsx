import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Fragrance } from '../../models/Fragrance';

type Props = {
  product: Fragrance;
  onPress: () => void;
};

export default function ForYou({ product, onPress }: Props) {
  return (
    <View>
      {/* Product Card */}
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: product.imgURL }}
        />

        <Text numberOfLines={2} style={styles.title}>
          {product.productTitle}
        </Text>
        <Text style={styles.price}>{product.productPrice}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
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
  //Title
  title: {
    fontSize: 14,
    lineHeight: 18,
    height: 36, // 2 lines × 18
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
