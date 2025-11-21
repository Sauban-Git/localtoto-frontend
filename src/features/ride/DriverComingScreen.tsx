import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type Props = NativeStackScreenProps<MainStackParamList, 'DriverComing'>;

const DriverComingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <LocalTotoLogo size="medium" />
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Driver Info Card */}
        <View style={styles.driverCard}>
          <View style={styles.driverHeader}>
            <View>
              <Text style={styles.driverName}>Jhon Jacob</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4].map((star) => (
                  <Ionicons key={star} name="star" size={16} color="#F59E0B" />
                ))}
                <Ionicons name="star-outline" size={16} color="#F59E0B" />
              </View>
            </View>
            <View style={styles.avatarContainer}>
              <Ionicons name="person" size={40} color="#22C55E" />
            </View>
          </View>
        </View>

        {/* Ride Details */}
        <View style={styles.rideDetailsCard}>
          <Text style={styles.arrivalText}>Your ride is arriving in 15min.</Text>
          <View style={styles.rideInfoRow}>
            <View>
              <Text style={styles.rideLabel}>Auto Type: Mini</Text>
              <Text style={styles.vehicleNumber}>G5-3904-jk</Text>
            </View>
            <View style={styles.vehicleIcon}>
              <Ionicons name="car" size={48} color="#F59E0B" />
            </View>
            <TouchableOpacity style={styles.phoneButton}>
              <Ionicons name="call" size={24} color="#22C55E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Trip Route */}
        <View style={styles.routeCard}>
          <Text style={styles.routeTitle}>Trip Route</Text>
          <View style={styles.routeItem}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.greenDot]} />
            </View>
            <Text style={styles.routeText}>Current location.</Text>
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.routeItem}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.redDot]} />
            </View>
            <Text style={styles.routeText}>Loction where to reach.</Text>
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.routeItem}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.redDot]} />
            </View>
            <Text style={styles.routeText}>Add a Stop.</Text>
          </View>
        </View>

        {/* Total Amount */}
        <View style={styles.amountCard}>
          <Text style={styles.amountLabel}>Total Amount</Text>
          <Text style={styles.amountValue}>$50.00</Text>
        </View>

        {/* Cancel Ride Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('CancelRide')}
        >
          <Text style={styles.cancelButtonText}>Cancel Ride</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A5D2C',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  driverCard: {
    backgroundColor: '#22C55E',
    borderRadius: 16,
    padding: 20,
  },
  driverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rideDetailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  arrivalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  rideInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rideLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  vehicleNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  vehicleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDF4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  routeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  dotContainer: {
    width: 24,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  greenDot: {
    backgroundColor: '#22C55E',
  },
  redDot: {
    backgroundColor: '#EF4444',
  },
  routeText: {
    fontSize: 16,
    color: '#000000',
  },
  dottedLine: {
    width: 2,
    height: 24,
    borderLeftWidth: 2,
    borderLeftColor: '#E5E7EB',
    borderStyle: 'dashed',
    marginLeft: 11,
    marginVertical: 8,
  },
  amountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  amountLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  amountValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22C55E',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#22C55E',
    borderRadius: 8,
    paddingVertical: 16,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default DriverComingScreen;
