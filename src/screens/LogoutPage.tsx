import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LogOutPage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>😂 You’ve been punked!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
