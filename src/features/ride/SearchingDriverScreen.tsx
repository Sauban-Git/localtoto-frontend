import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'SearchingDriver'>;

const searchingSteps = [
  'Matching you with nearby verified drivers',
  'Sharing your green route preference',
  'Confirming pickup instructions',
];

const SearchingDriverScreen: React.FC<Props> = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.card, { backgroundColor: theme.surface }]}>
          <ActivityIndicator color={theme.tint} size="large" />
          <Text style={[styles.title, { color: theme.text }]}>Finding your LocalToto</Text>
          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            We are selecting the closest eco-friendly driver for you. This usually takes less than a
            minute.
          </Text>
        </View>
        <View style={[styles.timelineCard, { backgroundColor: theme.surface }]}>
          {searchingSteps.map((step, index) => (
            <View key={step} style={styles.timelineRow}>
              <View
                style={[
                  styles.timelineBullet,
                  { backgroundColor: theme.tint, opacity: (index + 1) / searchingSteps.length },
                ]}
              />
              <Text style={[styles.timelineText, { color: theme.text }]}>{step}</Text>
            </View>
          ))}
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
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  timelineCard: {
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timelineBullet: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  timelineText: {
    flex: 1,
    fontSize: 15,
  },
});

export default SearchingDriverScreen;
