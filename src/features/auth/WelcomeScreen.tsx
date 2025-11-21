import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <LocalTotoLogo size="medium" />
        </View>

        {/* Central Graphic */}
        <View style={styles.graphicContainer}>
          <View style={styles.circleGraphic}>
            <View style={styles.mapGrid}>
              <Ionicons name="location" size={48} color="#0A5D2C" />
              <View style={styles.autoIcon}>
                <Ionicons name="car" size={32} color="#22C55E" />
              </View>
            </View>
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>AUTO BOOKING</Text>
          <Text style={styles.subtitle}>First open Mobility app</Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          App by the drivers for the people. 100% direct payment to drivers. Book an auto with Zero
          commission
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#22C55E',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 20,
  },
  graphicContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  circleGraphic: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  autoIcon: {
    marginTop: 8,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  getStartedButton: {
    backgroundColor: '#16A34A',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 18,
  },
});

export default WelcomeScreen;
