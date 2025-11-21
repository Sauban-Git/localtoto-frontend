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

type Props = NativeStackScreenProps<MainStackParamList, 'InRide'>;

const milestones = [
  { label: 'Departed Lekki', time: '3:10 PM', status: 'complete' },
  { label: 'Toll gate checkpoint', time: '3:18 PM', status: 'current' },
  { label: 'Arriving Airport T1', time: '3:45 PM', status: 'upcoming' },
];

const InRideScreen: React.FC<Props> = ({ navigation }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, { backgroundColor: theme.surface }]}>
          <Text style={[styles.title, { color: theme.text }]}>Enjoy the ride 🌱</Text>
          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            Estimated arrival · 3:45 PM · 12 km left
          </Text>
          <View style={styles.statRow}>
            <View style={[styles.statCard, { backgroundColor: theme.surfaceAlt }]}>
              <Text style={[styles.statValue, { color: theme.text }]}>4.9</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Driver rating</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: theme.surfaceAlt }]}>
              <Text style={[styles.statValue, { color: theme.text }]}>-12%</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>
                CO₂ vs regular rides
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.timelineCard, { backgroundColor: theme.surface }]}>
          <Text style={[styles.timelineTitle, { color: theme.text }]}>Trip status</Text>
          {milestones.map((milestone) => (
            <View key={milestone.label} style={styles.milestoneRow}>
              <View
                style={[
                  styles.milestoneBullet,
                  {
                    backgroundColor:
                      milestone.status === 'complete'
                        ? theme.tint
                        : milestone.status === 'current'
                          ? theme.tint
                          : theme.border,
                    opacity: milestone.status === 'upcoming' ? 0.4 : 1,
                  },
                ]}
              />
              <View style={styles.milestoneContent}>
                <Text style={[styles.milestoneLabel, { color: theme.text }]}>
                  {milestone.label}
                </Text>
                <Text style={[styles.milestoneTime, { color: theme.textMuted }]}>
                  {milestone.time}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.actionRow, { backgroundColor: theme.surface }]}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color={theme.tint} />
            <Text style={[styles.actionText, { color: theme.tint }]}>Message driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Payment')}>
            <Ionicons name="cash-outline" size={20} color={theme.tint} />
            <Text style={[styles.actionText, { color: theme.tint }]}>Payment info</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    borderRadius: 24,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 15,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    gap: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  timelineCard: {
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  milestoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  milestoneBullet: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
  milestoneTime: {
    fontSize: 13,
  },
  actionRow: {
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(15, 169, 88, 0.16)',
    paddingVertical: 12,
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontWeight: '600',
  },
});

export default InRideScreen;
