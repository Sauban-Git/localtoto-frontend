import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'Drop'>;

const suggestions = [
  { title: 'Murtala Muhammed Airport', area: 'Ikeja, Lagos', icon: 'airplane-outline' },
  { title: 'Lekki Conservation Centre', area: 'Lekki Peninsula', icon: 'leaf-outline' },
  { title: 'Eko Atlantic City', area: 'Victoria Island', icon: 'business-outline' },
  { title: 'National Museum', area: 'Onikan, Lagos', icon: 'library-outline' },
  { title: 'Tarkwa Bay Beach', area: 'Lagos Island', icon: 'water-outline' },
];

const DropScreen: React.FC<Props> = ({ navigation, route }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const [search, setSearch] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Current Location');

  // Get pickup location from route params if available
  useEffect(() => {
    if (route.params?.pickupLocation) {
      setPickupLocation(route.params.pickupLocation);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Where to?</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Input */}
        <View style={[styles.searchContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Ionicons name="search-outline" size={20} color={theme.icon} />
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Enter destination"
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
            autoFocus
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={20} color={theme.icon} />
            </TouchableOpacity>
          )}
        </View>

        {/* Suggestions */}
        <View style={styles.suggestions}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.suggestionItem, { borderBottomColor: theme.border }]}
              onPress={() => {
                // Navigate to fare estimate with pickup and dropoff locations
                navigation.navigate('FareEstimate', {
                  pickup: pickupLocation,
                  dropoff: item.title,
                });
              }}
            >
              <View style={styles.suggestionContent}>
                <Text style={[styles.suggestionTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.suggestionSubtitle, { color: theme.textMuted }]}>
                  {item.area}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={theme.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  placeholder: {
    width: 32,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  suggestionsSection: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  suggestionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestionContent: {
    flex: 1,
    gap: 4,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  suggestionSubtitle: {
    fontSize: 14,
  },
});

export default DropScreen;
