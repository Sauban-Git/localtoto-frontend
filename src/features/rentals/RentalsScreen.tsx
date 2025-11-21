import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../../../constants/theme';

const RentalsScreen = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>Rentals</Text>
        <Text style={{ color: theme.text }}>Rent a vehicle for your needs.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default RentalsScreen;
