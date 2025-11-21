import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
// Note: In production, install expo-location: npx expo install expo-location
// For now, we'll use a mock implementation
import { Colors } from '@/constants/theme';
import { AuthStackParamList } from '../../types/navigation';
import { useAuth } from '@/src/store/AuthContext';

type PermissionsScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Permissions'>;

type Props = {
  navigation: PermissionsScreenNavigationProp;
};

const PermissionsScreen: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const { login } = useAuth();
  const [locationGranted, setLocationGranted] = useState(false);
  const [notificationsGranted, setNotificationsGranted] = useState(false);

  const requestLocationPermission = async () => {
    // Mock implementation - in production, use expo-location
    // const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationGranted(true);
    Alert.alert('Location Access', 'Location permission granted. You can now book rides.');
  };

  const requestNotificationsPermission = async () => {
    // In a real app, you would use expo-notifications
    // For now, we'll just mark it as granted
    setNotificationsGranted(true);
    Alert.alert('Notifications', 'Notifications permission granted.');
  };

  const handleContinue = () => {
    if (locationGranted) {
      login(); // This will navigate to main app (BookERickshaw screen)
    } else {
      Alert.alert('Required', 'Please allow location access to continue.');
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Allow Permissions</Text>
          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            LocalToto needs these permissions to provide you with the best experience.
          </Text>
        </View>

        {/* Location Permission */}
        <View style={[styles.permissionCard, { backgroundColor: theme.surface }]}>
          <View style={[styles.iconContainer, { backgroundColor: theme.surfaceAlt }]}>
            <Ionicons name="location" size={32} color={theme.tint} />
          </View>
          <View style={styles.permissionContent}>
            <Text style={[styles.permissionTitle, { color: theme.text }]}>Location Access</Text>
            <Text style={[styles.permissionDescription, { color: theme.textMuted }]}>
              Required to find nearby drivers and set pickup location
            </Text>
            <Text style={[styles.permissionHint, { color: theme.textMuted }]}>
              Tap &quot;Allow while using app&quot;
            </Text>
          </View>
          {locationGranted ? (
            <Ionicons name="checkmark-circle" size={24} color={theme.tint} />
          ) : (
            <TouchableOpacity
              style={[styles.permissionButton, { backgroundColor: theme.tint }]}
              onPress={requestLocationPermission}
            >
              <Text style={styles.permissionButtonText}>Allow</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Notifications Permission */}
        <View style={[styles.permissionCard, { backgroundColor: theme.surface }]}>
          <View style={[styles.iconContainer, { backgroundColor: theme.surfaceAlt }]}>
            <Ionicons name="notifications" size={32} color={theme.tint} />
          </View>
          <View style={styles.permissionContent}>
            <Text style={[styles.permissionTitle, { color: theme.text }]}>Notifications</Text>
            <Text style={[styles.permissionDescription, { color: theme.textMuted }]}>
              Optional - Get updates about your ride status
            </Text>
          </View>
          {notificationsGranted ? (
            <Ionicons name="checkmark-circle" size={24} color={theme.tint} />
          ) : (
            <TouchableOpacity
              style={[styles.permissionButton, { backgroundColor: theme.tint }]}
              onPress={requestNotificationsPermission}
            >
              <Text style={styles.permissionButtonText}>Allow</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Phone Calls Permission */}
        <View style={[styles.permissionCard, { backgroundColor: theme.surface }]}>
          <View style={[styles.iconContainer, { backgroundColor: theme.surfaceAlt }]}>
            <Ionicons name="call" size={32} color={theme.tint} />
          </View>
          <View style={styles.permissionContent}>
            <Text style={[styles.permissionTitle, { color: theme.text }]}>Phone Calls</Text>
            <Text style={[styles.permissionDescription, { color: theme.textMuted }]}>
              Optional - Contact your driver directly
            </Text>
          </View>
          <Ionicons name="checkmark-circle" size={24} color={theme.tint} />
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueButton, { backgroundColor: theme.tint }]}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 24,
    gap: 20,
  },
  header: {
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  permissionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    gap: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionContent: {
    flex: 1,
    gap: 4,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  permissionDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  permissionHint: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 4,
  },
  permissionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  continueButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default PermissionsScreen;

