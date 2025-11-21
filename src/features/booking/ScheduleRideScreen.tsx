import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type Props = NativeStackScreenProps<MainStackParamList, 'ScheduleRide'>;

const ScheduleRideScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedDate] = useState('Wed, 14 Nov');
  const [selectedTime] = useState('03:24 PM');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <LocalTotoLogo size="medium" />
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Map placeholder */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapText}>Map View</Text>
      </View>

      {/* Bottom Sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.sheetTitle}>Schedule a Ride</Text>
        <Text style={styles.scheduleText}>Wed, 14 Nov</Text>
        <Text style={styles.timeRange}>03:25PM - 3:35PM</Text>

        <View style={styles.dateTimeRow}>
          <View style={styles.dateTimeColumn}>
            <Text style={styles.columnLabel}>Date</Text>
            <TouchableOpacity style={styles.dateTimeButton}>
              <Text style={styles.dateTimeText}>{selectedDate}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateTimeColumn}>
            <Text style={styles.columnLabel}>Time</Text>
            <TouchableOpacity style={styles.dateTimeButton}>
              <Text style={styles.dateTimeText}>{selectedTime}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => navigation.navigate('FareEstimate')}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A5D2C',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    fontSize: 18,
    color: '#6B7280',
  },
  bottomSheet: {
    backgroundColor: '#22C55E',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    gap: 16,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  timeRange: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  dateTimeColumn: {
    flex: 1,
    gap: 8,
  },
  columnLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.8,
  },
  dateTimeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dateTimeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A5D2C',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#22C55E',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '700',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#0A5D2C',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ScheduleRideScreen;

