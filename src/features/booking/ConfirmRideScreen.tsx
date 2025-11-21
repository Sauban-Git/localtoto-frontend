import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'ConfirmRide'>;

const ConfirmRideScreen: React.FC<Props> = ({ navigation, route }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const { driverName, vehicleNumber, price, eta } = route.params;

  const handleConfirm = () => {
    // Navigate to searching driver screen
    navigation.navigate('SearchingDriver');
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Confirm Ride</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Ride Summary Card */}
        <View style={[styles.summaryCard, { backgroundColor: theme.surface }]}>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>PICKUP</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>Lekki Phase 1</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>DROP-OFF</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>MM Airport T1</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>DISTANCE</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>21 km · 35 mins</Text>
          </View>
        </View>

        {/* Selected Ride Details */}
        <View style={[styles.rideCard, { backgroundColor: theme.surface, borderColor: theme.tint }]}>
          <View style={styles.rideHeader}>
            <View style={styles.rideHeaderLeft}>
              <View style={[styles.rideIcon, { backgroundColor: theme.surfaceAlt }]}>
                <Ionicons name="bicycle-outline" size={32} color={theme.tint} />
              </View>
              <View>
                <Text style={[styles.rideName, { color: theme.text }]}>Electric Auto</Text>
                <Text style={[styles.rideDescription, { color: theme.textMuted }]}>
                  Eco-friendly e-rickshaw · 2 seats
                </Text>
              </View>
            </View>
            <Ionicons name="checkmark-circle" size={28} color={theme.tint} />
          </View>

          <View style={styles.driverInfo}>
            <View style={styles.driverInfoRow}>
              <Ionicons name="person-outline" size={20} color={theme.icon} />
              <Text style={[styles.driverText, { color: theme.text }]}>Driver: {driverName}</Text>
            </View>
            <View style={styles.driverInfoRow}>
              <Ionicons name="car-outline" size={20} color={theme.icon} />
              <Text style={[styles.driverText, { color: theme.text }]}>Vehicle: {vehicleNumber}</Text>
            </View>
            <View style={styles.driverInfoRow}>
              <Ionicons name="time-outline" size={20} color={theme.icon} />
              <Text style={[styles.driverText, { color: theme.text }]}>ETA: {eta}</Text>
            </View>
          </View>

          <View style={styles.priceSection}>
            <Text style={[styles.priceLabel, { color: theme.textMuted }]}>Total Fare</Text>
            <Text style={[styles.priceValue, { color: theme.tint }]}>{price}</Text>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          style={[styles.confirmButton, { backgroundColor: theme.tint }]}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmButtonText}>Confirm Ride</Text>
        </TouchableOpacity>

        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.cancelButtonText, { color: theme.textMuted }]}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: {
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  summaryCard: {
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  rideCard: {
    borderWidth: 2,
    borderRadius: 24,
    padding: 20,
    gap: 16,
  },
  rideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rideHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  rideIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideName: {
    fontSize: 20,
    fontWeight: '700',
  },
  rideDescription: {
    fontSize: 14,
    marginTop: 4,
  },
  driverInfo: {
    gap: 12,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  driverInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  driverText: {
    fontSize: 16,
    fontWeight: '500',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  priceValue: {
    fontSize: 24,
    fontWeight: '700',
  },
  confirmButton: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  cancelButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ConfirmRideScreen;

