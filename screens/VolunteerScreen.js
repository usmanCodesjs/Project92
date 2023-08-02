import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VolunteerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteer Opportunities</Text>
      <Text style={styles.description}>Find and join volunteer projects that match your interests and skills.</Text> 
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

export default VolunteerScreen;
