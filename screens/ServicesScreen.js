import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Services</Text>
      <Text style={styles.description}>Explore various social services and resources to help those in need.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ServicesScreen;
