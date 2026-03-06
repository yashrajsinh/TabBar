import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Screens
import HomeScreen from '../screens/tabs/ProfileScreen';
import LogoutPage from '../screens/LogoutPage';

export default function ProfileStack() {
  const Stack = createNativeStackNavigator();
  //Registerign out Stack for Home Screen
  // There will be main HomeStack -> HomeScreen -> ProductPage
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PROFILE" component={HomeScreen} />
      <Stack.Screen name="LOGOUT_PAGE" component={LogoutPage} />
    </Stack.Navigator>
  );
}
