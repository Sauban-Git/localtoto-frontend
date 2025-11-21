import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type Props = NativeStackScreenProps<MainStackParamList, 'CancelRide'>;

const cancelReasons = [
  "Can't find rider",
  'Vehicle issue',
  'No car seat',
  'Personal issue',
  'Rider behavior',
];

const CancelRideScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <LocalTotoLogo size="medium" />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>CANCEL RIDE</Text>

        {/* Cancel Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.cancelCircle}>
            <Ionicons name="close" size={48} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.prompt}>Please select a reason for cancelling the ride.</Text>

        {/* Dropdown */}
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            {selectedReason || '-Select-'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#22C55E" />
        </TouchableOpacity>

        {/* Reason List */}
        <View style={styles.reasonsList}>
          {cancelReasons.map((reason, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.reasonItem,
                selectedReason === reason && styles.reasonItemSelected,
              ]}
              onPress={() => setSelectedReason(reason)}
            >
              <Text
                style={[
                  styles.reasonText,
                  selectedReason === reason && styles.reasonTextSelected,
                ]}
              >
                {reason}
              </Text>
              {selectedReason === reason && (
                <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Done Button */}
        <TouchableOpacity
          style={[styles.doneButton, !selectedReason && styles.doneButtonDisabled]}
          onPress={() => {
            if (selectedReason) {
              navigation.goBack();
            }
          }}
          disabled={!selectedReason}
        >
          <Text style={styles.doneButtonText}>Done</Text>
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
    backgroundColor: '#0A5D2C',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {
    padding: 24,
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 2,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  cancelCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prompt: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#22C55E',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000000',
  },
  reasonsList: {
    width: '100%',
    gap: 12,
    marginTop: 8,
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  reasonItemSelected: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  reasonText: {
    fontSize: 16,
    color: '#000000',
  },
  reasonTextSelected: {
    fontWeight: '600',
    color: '#22C55E',
  },
  doneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#22C55E',
    borderRadius: 8,
    paddingVertical: 16,
    width: '100%',
    marginTop: 8,
  },
  doneButtonDisabled: {
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default CancelRideScreen;

