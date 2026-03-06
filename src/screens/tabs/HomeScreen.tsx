import {
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

//Model of Product
import { ProductsModel } from '../../models/ProductsModel';

//Navigation
import { useNavigation } from '@react-navigation/native';
//Array of Model to store data
const products: ProductsModel[] = [
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN0228-001_1.jpg',
    productTitle: 'Nike Journey Run',
    productPrice: '$59.99',
    productDescription:
      'Lightweight running shoes designed for everyday comfort. Breathable mesh upper and responsive cushioning help keep your stride smooth and energized.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-554724-069_1.jpg',
    productTitle: 'Nike Mens Air Max Alpha Trainer 5',
    productPrice: '$79.99',
    productDescription:
      'Built for intense training sessions. Stable heel support, durable rubber outsole, and Air Max cushioning provide comfort during heavy workouts.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD8635-001_1.jpg',
    productTitle: 'Air Jordan 1 Low SE Craft',
    productPrice: '$109.85',
    productDescription:
      'A premium twist on the classic Jordan 1. Crafted with high-quality leather and iconic design elements for everyday street style.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FN7304-001_1.jpg',
    productTitle: 'Nike Air Max Excee',
    productPrice: '$105.25',
    productDescription:
      'Inspired by the legendary Air Max 90, these sneakers deliver modern comfort with visible Air cushioning and sleek street-ready style.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD2722-118_1.jpg',
    productTitle: 'Nike Pegasus 41',
    productPrice: '$120.99',
    productDescription:
      'Designed for runners who demand reliability. The Pegasus 41 offers responsive cushioning, breathable materials, and smooth transitions.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/f/ff7c9fbNike-DZ5485-003_1.jpg?rnd=20200526195200&',
    productTitle: 'Air Jordan 1 Retro High OG',
    productPrice: '$220.85',
    productDescription:
      'Classic high-top silhouette with heritage Jordan branding. Built for comfort, style, and everyday performance.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/f/ff7c9fbNike-DZ5485-003_1.jpg?rnd=20200526195200&',
    productTitle: 'Air Jordan 1 Retro High OG',
    productPrice: '$220.85',
    productDescription:
      'Classic high-top silhouette with heritage Jordan branding. Built for comfort, style, and everyday performance.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/f/9fe448dNike-DD0587-002_1.jpg',
    productTitle: 'Air Jordan 5 Retro',
    productPrice: '$325.90',
    productDescription:
      'A bold sneaker with iconic design lines and premium construction. The Air Jordan 5 Retro blends heritage basketball style with modern comfort.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD8635-001_1.jpg',
    productTitle: 'Air Jordan 1 Low SE Craft',
    productPrice: '$109.85',
    productDescription:
      'Low-top version of the iconic Jordan silhouette featuring premium textures and all-day comfort for streetwear lovers.',
  },
  {
    imgURL:
      'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-FD2722-118_1.jpg',
    productTitle: 'Nike Pegasus 41',
    productPrice: '$120.99',
    productDescription:
      'Reliable daily running shoes with responsive foam cushioning and breathable materials for long-distance comfort.',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('PRODUCT_PAGE', { product: item })}
          style={styles.card}
        >
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
        </TouchableOpacity>
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
