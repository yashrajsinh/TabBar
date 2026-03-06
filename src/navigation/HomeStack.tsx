import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import HomeScreen from '../screens/tabs/HomeScreen';
import ProductPage from '../screens/ProductPage';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME_MAIN" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_PAGE" component={ProductPage} />
    </Stack.Navigator>
  );
}
