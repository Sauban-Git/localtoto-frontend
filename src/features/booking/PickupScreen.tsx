import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
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

type Props = NativeStackScreenProps<MainStackParamList, 'Pickup'>;

const suggestions = [
  { title: 'Current Location', area: 'Your current location', icon: 'navigate-circle-outline' },
  { title: 'Home', area: '123 Main St, City', icon: 'home-outline' },
  { title: 'Work', area: '456 Office Rd, Business District', icon: 'briefcase-outline' },
  { title: 'Airport', area: 'International Airport', icon: 'airplane-outline' },
  { title: 'Train Station', area: 'Central Station', icon: 'train-outline' },
];

const PickupScreen: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Map View Area - Takes most of the screen */}
      <View style={[styles.mapContainer, { backgroundColor: '#E5E7EB' }]}>
        {/* Map placeholder with green accent */}
        <View style={styles.mapContent}>
          <View style={[styles.mapPin, { backgroundColor: theme.tint }]}>
            <Ionicons name="location" size={24} color="#fff" />
          </View>
          <Text style={styles.mapLabel}>Map view</Text>
          <Text style={styles.mapSubLabel}>Your location and nearby drivers</Text>
        </View>

        {/* Top header bar */}
        <View style={[styles.headerBar, { backgroundColor: theme.surface }]}>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Get a ride</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="notifications-outline" size={22} color={theme.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Ionicons name="person-circle-outline" size={22} color={theme.text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Form Card */}
      <View style={[styles.formCard, { backgroundColor: theme.surface }]}>
        {/* Search Input */}
        <View style={[styles.searchContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
          <Ionicons name="search-outline" size={20} color={theme.icon} />
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Enter pickup location"
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

        {/* Suggestions Section */}
        <ScrollView style={styles.suggestionsList}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.suggestionItem, { borderBottomColor: theme.border }]}
              onPress={() => {
                // Navigate to drop screen
                navigation.navigate('Drop');
              }}
            >
              <View style={[styles.suggestionIcon, { backgroundColor: theme.surfaceAlt }]}>
                <Ionicons name={item.icon as any} size={20} color={theme.tint} />
              </View>
              <View style={styles.suggestionText}>
                <Text style={[styles.suggestionTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.suggestionSubtitle, { color: theme.textMuted }]}>
                  {item.area}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Divider line */}
        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        {/* Dropoff Location Input */}
        <View style={styles.inputContainer}>
          <View style={[styles.inputIcon, { backgroundColor: theme.surface }]}>
            <View style={[styles.squareDot, { borderColor: theme.tint }]} />
          </View>
          <View style={styles.inputContent}>
            <Text style={[styles.inputLabel, { color: theme.textMuted }]}>Dropoff location</Text>
            <TouchableOpacity
              style={styles.inputField}
              onPress={() => navigation.navigate('Drop')}
            >
              <Text style={[styles.inputPlaceholder, { color: theme.textMuted }]}>
                Enter destination
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons Row */}
        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.surfaceAlt }]}
            onPress={() => navigation.navigate('Drop')}
          >
            <Ionicons name="time-outline" size={18} color={theme.text} />
            <Text style={[styles.actionButtonText, { color: theme.text }]}>Pickup now</Text>
            <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: theme.surfaceAlt }]}
            onPress={() => navigation.navigate('Drop')}
          >
            <Ionicons name="person-outline" size={18} color={theme.text} />
            <Text style={[styles.actionButtonText, { color: theme.text }]}>For me</Text>
            <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Primary CTA Button */}
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: theme.tint }]}
          onPress={() => navigation.navigate('Drop')}
        >
          <Text style={styles.primaryButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  mapPin: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  mapLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  mapSubLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  headerBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    padding: 4,
  },
  formCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    marginTop: -24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  suggestionsList: {
    flex: 1,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  suggestionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  suggestionText: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  suggestionSubtitle: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 16,
  },
  inputIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  circleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  squareDot: {
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  inputContent: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  inputField: {
    paddingVertical: 8,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '500',
  },
  inputPlaceholder: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    marginLeft: 36,
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default PickupScreen;
