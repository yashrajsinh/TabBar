import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const ProductPage = ({ route }: any) => {
  //Storing product Obj from HomeScreen
  const { product } = route.params;
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.imgStyle}
        source={{ uri: product.imgURL }}
      />
      <Text>{product.productTitle}</Text>
      <Text>{product.productPrice}</Text>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3F4F4',
    borderRadius: 10,
    padding: 10,
    margin: 15,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,

    // Android shadow
    elevation: 8,
  },
  //Image
  imgStyle: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#E5E5E5',

    backgroundColor: '#FAFAFA',

    alignSelf: 'center',
  },
});
