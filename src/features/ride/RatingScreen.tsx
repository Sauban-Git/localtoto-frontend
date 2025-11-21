import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from '@/constants/theme';
import { MainStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<MainStackParamList, 'Rating'>;

const RatingScreen: React.FC<Props> = ({ navigation, route }) => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const driverName = route.params?.driverName || 'Driver';

  const handleSubmit = () => {
    // In a real app, submit rating to backend
    navigation.reset({
      index: 0,
      routes: [{ name: 'Pickup' }],
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.text }]}>Rate Your Ride</Text>
          <Text style={[styles.subtitle, { color: theme.textMuted }]}>
            How was your experience with {driverName}?
          </Text>
        </View>

        {/* Star Rating */}
        <View style={styles.ratingSection}>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => setRating(star)}
                style={styles.starButton}
              >
                <Ionicons
                  name={star <= rating ? 'star' : 'star-outline'}
                  size={48}
                  color={star <= rating ? theme.tint : theme.border}
                />
              </TouchableOpacity>
            ))}
          </View>
          {rating > 0 && (
            <Text style={[styles.ratingText, { color: theme.text }]}>
              {rating === 5
                ? 'Excellent!'
                : rating === 4
                  ? 'Great!'
                  : rating === 3
                    ? 'Good'
                    : rating === 2
                      ? 'Fair'
                      : 'Poor'}
            </Text>
          )}
        </View>

        {/* Comment Section */}
        <View style={styles.commentSection}>
          <Text style={[styles.commentLabel, { color: theme.text }]}>Add a comment (optional)</Text>
          <View style={[styles.commentContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <TextInput
              style={[styles.commentInput, { color: theme.text }]}
              placeholder="Share your experience..."
              placeholderTextColor={theme.textMuted}
              multiline
              numberOfLines={4}
              value={comment}
              onChangeText={setComment}
            />
          </View>
        </View>

        {/* Quick Feedback Buttons */}
        <View style={styles.feedbackSection}>
          <Text style={[styles.feedbackLabel, { color: theme.textMuted }]}>Quick feedback</Text>
          <View style={styles.feedbackButtons}>
            {['Clean car', 'Safe driving', 'On time', 'Friendly'].map((feedback) => (
              <TouchableOpacity
                key={feedback}
                style={[styles.feedbackButton, { backgroundColor: theme.surfaceAlt, borderColor: theme.border }]}
              >
                <Text style={[styles.feedbackButtonText, { color: theme.text }]}>{feedback}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: rating > 0 ? theme.tint : theme.border }]}
          onPress={handleSubmit}
          disabled={rating === 0}
        >
          <Text style={styles.submitButtonText}>Submit Rating</Text>
        </TouchableOpacity>

        {/* Skip Option */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Pickup' }] })}
        >
          <Text style={[styles.skipButtonText, { color: theme.textMuted }]}>Skip for now</Text>
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
    gap: 24,
  },
  header: {
    gap: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  ratingSection: {
    alignItems: 'center',
    gap: 16,
    paddingVertical: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  starButton: {
    padding: 4,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: '600',
  },
  commentSection: {
    gap: 12,
  },
  commentLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  commentContainer: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  commentInput: {
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  feedbackSection: {
    gap: 12,
  },
  feedbackLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedbackButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  feedbackButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  feedbackButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  submitButton: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  skipButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default RatingScreen;

