import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'FareEstimate'>;

// Only Electric Auto options
const electricAutoOptions = [
  {
    id: 'electric-auto-1',
    name: 'Electric Auto',
    description: 'Eco-friendly e-rickshaw · 2 seats',
    eta: '3 min',
    price: '₦1,200',
    icon: 'bicycle-outline',
    driverName: 'John Doe',
    vehicleNumber: 'E-AUTO-001',
  },
  {
    id: 'electric-auto-2',
    name: 'Electric Auto',
    description: 'Eco-friendly e-rickshaw · 2 seats',
    eta: '5 min',
    price: '₦1,100',
    icon: 'bicycle-outline',
    driverName: 'Jane Smith',
    vehicleNumber: 'E-AUTO-002',
  },
  {
    id: 'electric-auto-3',
    name: 'Electric Auto',
    description: 'Eco-friendly e-rickshaw · 2 seats',
    eta: '4 min',
    price: '₦1,300',
    icon: 'bicycle-outline',
    driverName: 'Mike Johnson',
    vehicleNumber: 'E-AUTO-003',
  },
  {
    id: 'electric-auto-4',
    name: 'Electric Auto',
    description: 'Eco-friendly e-rickshaw · 2 seats',
    eta: '6 min',
    price: '₦1,000',
    icon: 'bicycle-outline',
    driverName: 'Sarah Williams',
    vehicleNumber: 'E-AUTO-004',
  },
];

const FareEstimate: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleRideSelect = (rideId: string) => {
    setSelectedId(rideId);
    // Navigate to confirm ride screen
    const selectedRide = electricAutoOptions.find((r) => r.id === rideId);
    if (selectedRide) {
      navigation.navigate('ConfirmRide', {
        rideId: selectedRide.id,
        driverName: selectedRide.driverName,
        vehicleNumber: selectedRide.vehicleNumber,
        price: selectedRide.price,
        eta: selectedRide.eta,
      });
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Fare estimate</Text>
          <View style={styles.placeholder} />
        </View>

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

        {/* Electric Auto Options */}
        {electricAutoOptions.map((ride) => {
          const isSelected = ride.id === selectedId;
          return (
            <TouchableOpacity
              key={ride.id}
              style={[
                styles.rideCard,
                {
                  backgroundColor: isSelected ? theme.surfaceAlt : theme.surface,
                  borderColor: isSelected ? theme.tint : theme.border,
                },
              ]}
              onPress={() => handleRideSelect(ride.id)}
            >
              <View style={styles.rideHeader}>
                <View style={styles.rideHeaderLeft}>
                  <View style={[styles.rideIcon, { backgroundColor: theme.surfaceAlt }]}>
                    <Ionicons name={ride.icon as any} size={24} color={theme.tint} />
                  </View>
                  <View>
                    <Text style={[styles.rideName, { color: theme.text }]}>{ride.name}</Text>
                    <Text style={[styles.rideDescription, { color: theme.textMuted }]}>
                      {ride.description}
                    </Text>
                  </View>
                </View>
                {isSelected && <Ionicons name="checkmark-circle" size={24} color={theme.tint} />}
              </View>
              <View style={styles.rideFooter}>
                <View style={styles.rideFooterRow}>
                  <Ionicons name="time-outline" size={16} color={theme.icon} />
                  <Text style={[styles.rideMeta, { color: theme.text }]}>{ride.eta}</Text>
                </View>
                <Text style={[styles.ridePrice, { color: theme.text }]}>{ride.price}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
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
    fontSize: 18,
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
    borderWidth: 1.5,
    borderRadius: 24,
    padding: 20,
    gap: 6,
  },
  rideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rideHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  rideIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideName: {
    fontSize: 18,
    fontWeight: '700',
  },
  rideDescription: {
    fontSize: 14,
    marginTop: 2,
  },
  rideFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  rideFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  rideMeta: {
    fontSize: 14,
    fontWeight: '600',
  },
  ridePrice: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default FareEstimate;
