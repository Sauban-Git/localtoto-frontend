import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '../../../constants/theme';
import { MainStackParamList } from '../../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;

const HomeScreen = () => {
  const scheme = useColorScheme();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = Colors[scheme as keyof typeof Colors];

  type DestinationIcon = 'home' | 'briefcase' | 'airplane';
  
  interface Destination {
    id: string;
    name: string;
    address: string;
    icon: DestinationIcon;
  }

  const popularDestinations: Destination[] = [
    { id: '1', name: 'Home', address: '123 Main St, City', icon: 'home' },
    { id: '2', name: 'Work', address: '456 Office Rd', icon: 'briefcase' },
    { id: '3', name: 'Airport', address: 'International Airport', icon: 'airplane' },
  ];

  // Type guard to ensure theme has the required properties
  const safeTheme = theme as typeof theme & {
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    tint: string;
    border: string;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: safeTheme.background }]} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>User</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={32} color={theme.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Search Bar */}
        <TouchableOpacity 
          style={[styles.searchBar, { backgroundColor: safeTheme.surface }]}
          onPress={() => navigation.navigate('Pickup')}
        >
          <Ionicons name="search" size={20} color={safeTheme.textMuted} />
          <Text style={[styles.searchText, { color: safeTheme.textMuted }]}>
            Search for a ride
          </Text>
        </TouchableOpacity>

        {/* Action Cards */}
        <View style={styles.actionCardsContainer}>
          <TouchableOpacity 
            style={[styles.actionCard, { backgroundColor: safeTheme.surface }]}
            onPress={() => navigation.navigate('Soloride')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="car-sport" size={24} color={safeTheme.tint} />
            </View>
            <Text style={[styles.actionText, { color: safeTheme.text }]}>Soloride</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionCard, { backgroundColor: safeTheme.surface }]}
            onPress={() => navigation.navigate('Sharing')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="people" size={24} color={safeTheme.tint} />
            </View>
            <Text style={[styles.actionText, { color: safeTheme.text }]}>Sharing</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionCard, { backgroundColor: safeTheme.surface }]}
            onPress={() => navigation.navigate('Rentals')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="time-outline" size={24} color={safeTheme.tint} />
            </View>
            <Text style={[styles.actionText, { color: safeTheme.text }]}>Rentals</Text>
          </TouchableOpacity>
        </View>

        {/* Where to? Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: safeTheme.text }]}>Where to?</Text>
          {popularDestinations.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.destinationItem, { borderBottomColor: safeTheme.border }]}
              onPress={() => navigation.navigate('Pickup', { destination: item.name })}
            >
              <View style={styles.destinationIcon}>
                <Ionicons name={item.icon} size={20} color={safeTheme.tint} />
              </View>
              <View style={styles.destinationTextContainer}>
                <Text style={[styles.destinationName, { color: safeTheme.text }]}>{item.name}</Text>
                <Text style={[styles.destinationAddress, { color: safeTheme.textMuted }]}>
                  {item.address}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={safeTheme.textMuted} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: safeTheme.surface }]}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={24} color={safeTheme.tint} />
          <Text style={[styles.navText, { color: safeTheme.tint }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Map')}
        >
          <Ionicons name="map-outline" size={24} color={safeTheme.textMuted} />
          <Text style={[styles.navText, { color: safeTheme.textMuted }]}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Wallet')}
        >
          <Ionicons name="wallet-outline" size={24} color={safeTheme.textMuted} />
          <Text style={[styles.navText, { color: safeTheme.textMuted }]}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-outline" size={24} color={safeTheme.textMuted} />
          <Text style={[styles.navText, { color: safeTheme.textMuted }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  profileButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  searchText: {
    marginLeft: 8,
    fontSize: 16,
  },
  actionCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionCard: {
    width: '30%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  destinationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  destinationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  destinationTextContainer: {
    flex: 1,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  destinationAddress: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default HomeScreen;
