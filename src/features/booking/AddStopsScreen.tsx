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
} from 'react-native';
import { MainStackParamList } from '../../types/navigation';
import LocalTotoLogo from '../../components/ui/LocalTotoLogo';

type Props = NativeStackScreenProps<MainStackParamList, 'AddStops'>;

const AddStopsScreen: React.FC<Props> = ({ navigation }) => {
  const [stops, setStops] = useState<string[]>(['']);

  const addStop = () => {
    if (stops.length < 3) {
      setStops([...stops, '']);
    }
  };

  const removeStop = (index: number) => {
    if (stops.length > 1) {
      setStops(stops.filter((_, i) => i !== index));
    }
  };

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
        <View style={styles.routeCard}>
          {/* From */}
          <View style={styles.routeItem}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.greenDot]} />
            </View>
            <View style={styles.routeContent}>
              <Text style={styles.routeLabel}>From</Text>
              <Text style={styles.routeText}>Current location</Text>
            </View>
          </View>

          {/* Dotted Line */}
          <View style={styles.dottedLine} />

          {/* Where To */}
          <View style={styles.routeItem}>
            <View style={styles.dotContainer}>
              <View style={[styles.dot, styles.redDot]} />
            </View>
            <View style={styles.routeContent}>
              <Text style={styles.routeLabel}>Where To</Text>
              <TouchableOpacity onPress={addStop} style={styles.addStopButton}>
                <Text style={styles.addStopText}>Add Stop</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Additional Stops */}
          {stops.map((stop, index) => (
            <View key={index}>
              <View style={styles.dottedLine} />
              <View style={styles.routeItem}>
                <View style={styles.dotContainer}>
                  <View style={[styles.dot, styles.redDot]} />
                </View>
                <View style={styles.routeContent}>
                  <TextInput
                    style={styles.stopInput}
                    placeholder="Add Stop"
                    placeholderTextColor="#9CA3AF"
                    value={stop}
                    onChangeText={(text) => {
                      const newStops = [...stops];
                      newStops[index] = text;
                      setStops(newStops);
                    }}
                  />
                </View>
                {stops.length > 1 && (
                  <TouchableOpacity onPress={() => removeStop(index)}>
                    <Ionicons name="close-circle" size={24} color="#EF4444" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Instructions */}
        <Text style={styles.instructions}>
          Please keep stops to 3 minutes or less. As a courtesy to your driver and their time,
          please limit each stop to 3 minutes or less. Otherwise, your fare may change.
        </Text>

        {/* Done Button */}
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => navigation.navigate('FareEstimate')}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A5D2C',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {
    padding: 24,
  },
  routeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
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
  routeContent: {
    flex: 1,
  },
  routeLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  routeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  addStopButton: {
    paddingVertical: 8,
  },
  addStopText: {
    fontSize: 16,
    color: '#22C55E',
    fontWeight: '600',
  },
  stopInput: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 8,
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
  instructions: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 24,
  },
  doneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#22C55E',
    borderRadius: 8,
    paddingVertical: 16,
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AddStopsScreen;

