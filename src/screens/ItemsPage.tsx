import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const ItemsPage = ({ route }: any) => {
  //Storing product Obj from HomeScreen
  const { product } = route.params;
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.imgStyle}
        source={{ uri: product.imgURL }}
      />
      <Text style={styles.title}>{product.productTitle}</Text>
      <Text style={styles.price}>{product.productPrice}</Text>

      <View style={styles.divider} />

      <Text style={styles.description}>{product.productDescription} </Text>

      <TouchableOpacity
        onPress={() => Alert.alert('Yay 🥰!', 'Added to card.')}
        style={styles.cartBtn}
        activeOpacity={0.5}
      >
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsPage;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    margin: 14,

    // subtle border (premium trick)
    borderWidth: 1,
    borderColor: '#EFEFEF',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    // Android shadow
    elevation: 20,
  },

  // Image
  imgStyle: {
    width: '100%',
    aspectRatio: 4 / 5,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E5E5E5',
    backgroundColor: '#FAFAFA',
    alignSelf: 'center',
  },

  // Title
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  //divider
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 1,
  },

  // Price
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },

  // Button
  cartBtn: {
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 25,
    top: 8,
    alignItems: 'center',
  },

  cartText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
