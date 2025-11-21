import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type Props = NativeStackScreenProps<MainStackParamList, 'BookERickshaw'>;

const BookERickshawScreen: React.FC<Props> = ({ navigation }) => {
  const handleBookNow = () => {
    // Navigate to Pickup screen first to select pickup location
    navigation.navigate('Pickup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <LocalTotoLogo size="medium" />
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        {/* Circular Green Design */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleTitle}>
              Book an <Text style={styles.highlight}>e-Rickshaw</Text>
            </Text>
            <Text style={styles.circleSubtitle}>in Your City</Text>
          </View>
        </View>

        {/* Input Fields */}
        <View style={styles.inputsContainer}>
          {/* Pickup */}
          {/* Pickup */}
          <TouchableOpacity
            style={styles.inputRow}
            onPress={() => navigation.navigate('Pickup')}
          >
            <Ionicons name="location" size={20} color="#22C55E" />
            <Text style={[styles.input, styles.inputPlaceholder]}>
              Enter pickup location or use map
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Pickup')}>
              <Ionicons name="map-outline" size={20} color="#22C55E" />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Drop */}
          <TouchableOpacity
            style={styles.inputRow}
            onPress={() => navigation.navigate('Drop')}
          >
            <Ionicons name="location" size={20} color="#22C55E" />
            <Text style={[styles.input, styles.inputPlaceholder]}>
              Enter drop location
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Drop')}>
              <Ionicons name="map-outline" size={20} color="#22C55E" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBookNow}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#0A5D2C',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  circle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#86EFAC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  circleTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A5D2C',
    textAlign: 'center',
  },
  highlight: {
    color: '#F59E0B',
  },
  circleSubtitle: {
    fontSize: 18,
    color: '#0A5D2C',
    marginTop: 8,
  },
  inputsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#22C55E',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  inputPlaceholder: {
    color: '#9CA3AF',
  },
  bookButton: {
    backgroundColor: '#86EFAC',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#0A5D2C',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default BookERickshawScreen;
