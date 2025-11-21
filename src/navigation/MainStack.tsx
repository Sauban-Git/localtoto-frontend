// MainStack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constants/theme';
import HomeScreen from '../features/home/HomeScreen';
import AddStopsScreen from '../features/booking/AddStopsScreen';
import BookERickshawScreen from '../features/booking/BookERickshawScreen';
import ConfirmRideScreen from '../features/booking/ConfirmRideScreen';
import DropScreen from '../features/booking/DropScreen';
import FareEstimate from '../features/booking/FareEstimate';
import PickupScreen from '../features/booking/PickupScreen';
import ScheduleRideScreen from '../features/booking/ScheduleRideScreen';
import PaymentScreen from '../features/payments/PaymentScreen';
import CancelRideScreen from '../features/ride/CancelRideScreen';
import DriverComingScreen from '../features/ride/DriverComingScreen';
import InRideScreen from '../features/ride/InRideScreen';
import RatingScreen from '../features/ride/RatingScreen';
import SearchingDriverScreen from '../features/ride/SearchingDriverScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookERickshaw"
        component={BookERickshawScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pickup"
        component={PickupScreen}
        options={{ 
          title: 'Set pickup location',
          headerShown: true,
          headerBackTitle: 'Back'
        }}
      />
      <Stack.Screen 
        name="Drop" 
        component={DropScreen} 
        options={{ 
          title: 'Where to?',
          headerShown: true,
          headerBackTitle: 'Back'
        }} 
      />
      <Stack.Screen
        name="ScheduleRide"
        component={ScheduleRideScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddStops"
        component={AddStopsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FareEstimate"
        component={FareEstimate}
        options={{ 
          title: 'Choose a ride',
          headerShown: true,
          headerBackTitle: 'Back'
        }}
      />
      <Stack.Screen
        name="ConfirmRide"
        component={ConfirmRideScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchingDriver"
        component={SearchingDriverScreen}
        options={{ title: 'Driver search' }}
      />
      <Stack.Screen
        name="DriverComing"
        component={DriverComingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InRide"
        component={InRideScreen}
        options={{ title: 'In ride' }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ title: 'Payment' }}
      />
      <Stack.Screen
        name="Rating"
        component={RatingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CancelRide"
        component={CancelRideScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
