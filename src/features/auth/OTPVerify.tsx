import React, { useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';
import { useAuth } from '../../store/AuthContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'OTPVerify'>;

const OTPVerify: React.FC<Props> = ({ route, navigation }) => {
  const [code, setCode] = useState(['5', '5', '', '']);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const phoneNumber = route.params?.phone ?? '+91 1924904358';

  const handleChange = (value: string, idx: number) => {
    const digit = value.slice(-1);
    const nextCode = [...code];
    nextCode[idx] = digit;
    setCode(nextCode);
    if (digit && idx < inputRefs.length - 1) {
      inputRefs[idx + 1].current?.focus();
    }
  };

  const { login } = useAuth();

  const handleSubmit = () => {
    // After OTP verification, update auth state and navigate to main app
    login();
  };

  const isFilled = useMemo(() => code.every((digit) => digit !== ''), [code]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <LocalTotoLogo size="medium" />
        <Text style={styles.headerTitle}>Verification</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Verify Mobile Number</Text>
        <Text style={styles.subtitle}>We've sent a 4-digit verification code to {phoneNumber}</Text>

        {/* OTP Input */}
        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={`digit-${index}`}
              ref={inputRefs[index]}
              style={[styles.codeInput, { borderColor: '#22C55E', color: '#000000' }]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              returnKeyType="done"
            />
          ))}
        </View>

        {/* Resend Code */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive code?{' '}
            <Text style={styles.resendLink} onPress={() => console.log('Resend code')}>
              Resend
            </Text>
          </Text>
          <Text style={styles.timerText}>0:30</Text>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          style={[styles.confirmButton, !isFilled && styles.confirmButtonDisabled]}
          disabled={!isFilled}
          onPress={handleSubmit}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
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
    backgroundColor: '#374151',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 24,
    lineHeight: 20,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  codeInput: {
    width: 64,
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  resendText: {
    fontSize: 14,
    color: '#6B7280',
  },
  timerText: {
    fontSize: 14,
    color: '#22C55E',
    fontWeight: '600',
  },
  resendLink: {
    color: '#22C55E',
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#22C55E',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default OTPVerify;
