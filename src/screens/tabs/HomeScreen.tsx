import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { ProductsModel } from '../../models/ProductsModel';
//Array of Model to store data
const products: ProductsModel[] = [
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN0228-001_1.jpg',
    productTitle: 'Nike Journey Run',
    productPrice: '$59.99',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-554724-069_1.jpg',
    productTitle: 'Nike Mens Air Max Alpha Trainer 5',
    productPrice: '$79.99',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD8635-001_1.jpg',
    productTitle: 'Air Jordan 1 Low SE Craft',
    productPrice: '$109.85',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN7304-001_1.jpg',
    productTitle: 'Nike Air Max Excee',
    productPrice: '$105.25',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD2722-118_1.jpg',
    productTitle: 'Nike Pegasus 41',
    productPrice: '$120.99',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/f/ff7c9fbNike-DZ5485-003_1.jpg?rnd=20200526195200&',
    productTitle: 'Air Jordan 1 Retro High OG',
    productPrice: '$220.85',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/f/ff7c9fbNike-DZ5485-003_1.jpg?rnd=20200526195200&',
    productTitle: 'Air Jordan 1 Retro High OG',
    productPrice: '$220.85',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/f/9fe448dNike-DD0587-002_1.jpg',
    productTitle: 'Air Jordan 5 Retro',
    productPrice: '$325.90',
  },
];

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={{
              width: '100%',
              height: 130,
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={{ uri: item.imgURL }}
          />
          <Text numberOfLines={2}>{item.productTitle}</Text>
          <Text style={styles.textPrice}>{item.productPrice}</Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 3,

    // Android shadow
    elevation: 10,
  },
  textPrice: {
    fontWeight: 'bold',
  },
});
