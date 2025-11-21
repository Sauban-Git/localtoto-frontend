import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useColorScheme } from 'react-native';
import { Colors } from '../../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Define the navigation params type inline since we're having issues with the import
type MainStackParamList = {
  Home: undefined;
  Solo: undefined;
  Sharing: undefined;
  Rentals: undefined;
  Map: undefined;
  Wallet: undefined;
  Profile: undefined;
  Pickup: { destination?: string };
  Drop: { pickupLocation?: string };
  // Add other screen types as needed
};

type SoloNavigationProp = {
  navigate: (screen: keyof MainStackParamList, params?: any) => void;
};

const SoloRideScreen = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const navigation = useNavigation<SoloNavigationProp>();
  const [pickup, setPickup] = useState('Current Location');
  const [destination, setDestination] = useState('');

  const handleFindRide = () => {
    // Navigate to the pickup screen with the entered destination
    navigation.navigate('Pickup', { destination });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Solo Ride</Text>
          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            Book a ride just for you
          </Text>
        </View>

        <View style={[styles.card, { backgroundColor: theme.surface }]}>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <View style={[styles.dot, { backgroundColor: theme.tint }]} />
              <View style={[styles.line, { backgroundColor: theme.border }]} />
              <Ionicons name="location-sharp" size={20} color={theme.tint} />
            </View>
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder="Current location"
              placeholderTextColor={theme.textMuted}
              value={pickup}
              onChangeText={setPickup}
              editable={false}
            />
            <Ionicons name="locate" size={20} color={theme.tint} />
          </View>

          <View style={styles.divider} />

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="location-sharp" size={20} color={theme.tint} />
            </View>
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder="Where to?"
              placeholderTextColor={theme.textMuted}
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.button, { 
            backgroundColor: destination ? theme.tint : '#cccccc',
            opacity: destination ? 1 : 0.7
          }]}
          onPress={handleFindRide}
          disabled={!destination}
        >
          <Text style={styles.buttonText}>Find a Ride</Text>
        </TouchableOpacity>

        <View style={styles.recentContainer}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Recent Rides</Text>
          <View style={[styles.recentCard, { backgroundColor: theme.surface }]}>
            <Ionicons name="time-outline" size={20} color={theme.textMuted} />
            <Text style={[styles.recentText, { color: theme.text }]}>Work</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
          </View>
          <View style={[styles.recentCard, { backgroundColor: theme.surface }]}>
            <Ionicons name="time-outline" size={20} color={theme.textMuted} />
            <Text style={[styles.recentText, { color: theme.text }]}>Home</Text>
            <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
  },
  card: {
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  iconContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  line: {
    width: 2,
    height: 20,
    marginVertical: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginLeft: 36,
    marginVertical: 8,
  },
  button: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  recentContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  recentText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
});

export default SoloRideScreen;