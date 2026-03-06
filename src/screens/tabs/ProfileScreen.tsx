import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

//Navigation Stack
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const settings = [
    { title: 'My Orders' },
    { title: 'Wishlist' },
    { title: 'Shipping Address' },
    { title: 'Payment Methods' },
    { title: 'Notifications' },
    { title: 'Privacy Policy' },
  ];

  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://waryhub.com/public/uploads/thumbnail/funny-chinese-meme-face-21724490843j5h8p3bwwk.png',
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>jeff@epstine.com</Text>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        {settings.map((item, index) => (
          <TouchableOpacity key={index} style={styles.settingItem}>
            <Text style={styles.settingText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Bottom Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('LOGOUT_PAGE')}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  profileCard: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 30,
    margin: 15,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 10,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
  },

  email: {
    fontSize: 14,
    color: '#777',
  },

  settingsContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    borderRadius: 15,
    paddingVertical: 5,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 8,
  },

  settingItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },

  settingText: {
    fontSize: 16,
    fontWeight: '500',
  },
  bottomButton: {
    marginHorizontal: 15,
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
