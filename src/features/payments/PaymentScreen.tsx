import { Ionicons } from '@expo/vector-icons';
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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'Payment'>;

const paymentMethods = [
  { id: 'cash', label: 'Cash', balance: 'Please prepare exact change', icon: 'cash-outline' },
  { id: 'upi', label: 'UPI', balance: 'Pay via UPI apps', icon: 'phone-portrait-outline' },
  { id: 'wallet', label: 'LocalToto Wallet', balance: '₦5,200', icon: 'wallet-outline' },
  { id: 'card', label: 'Card', balance: 'Visa •••• 2231', icon: 'card-outline' },
];

const PaymentScreen: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const [selectedMethod, setSelectedMethod] = React.useState('cash');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.summaryCard, { backgroundColor: theme.surface }]}>
          <Text style={[styles.summaryTitle, { color: theme.text }]}>Trip summary</Text>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>Ride</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>₦2,850</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.textMuted }]}>Green offset</Text>
            <Text style={[styles.summaryValue, { color: theme.text }]}>₦150</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: theme.text }]}>Total due</Text>
            <Text style={[styles.totalValue, { color: theme.text }]}>₦3,000</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Choose payment method</Text>
          <Text style={[styles.sectionSubtitle, { color: theme.textMuted }]}>
            Switch anytime before trip ends
          </Text>
        </View>

        {paymentMethods.map((method) => {
          const isSelected = method.id === selectedMethod;
          return (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.methodCard,
                {
                  backgroundColor: isSelected ? theme.surfaceAlt : theme.surface,
                  borderColor: isSelected ? theme.tint : 'transparent',
                  borderWidth: isSelected ? 2 : 0,
                },
              ]}
              onPress={() => setSelectedMethod(method.id)}
            >
              <View style={[styles.methodIcon, { backgroundColor: theme.surfaceAlt }]}>
                <Ionicons name={method.icon as any} size={20} color={theme.tint} />
              </View>
              <View style={styles.methodContent}>
                <Text style={[styles.methodLabel, { color: theme.text }]}>{method.label}</Text>
                <Text style={[styles.methodBalance, { color: theme.textMuted }]}>{method.balance}</Text>
              </View>
              {isSelected && <Ionicons name="checkmark-circle" size={24} color={theme.tint} />}
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: theme.tint }]}
          onPress={() => navigation.navigate('Rating', { driverName: 'John Doe' })}
        >
          <Text style={styles.primaryButtonText}>Pay & Complete</Text>
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
  summaryCard: {
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 4,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  sectionHeader: {
    gap: 4,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  sectionSubtitle: {
    fontSize: 14,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    gap: 12,
  },
  methodIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodContent: {
    flex: 1,
  },
  methodLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  methodBalance: {
    fontSize: 13,
  },
  primaryButton: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default PaymentScreen;