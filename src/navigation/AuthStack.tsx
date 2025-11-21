// AuthStack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';
import LoginScreen from '../features/auth/LoginScreen';
import OTPVerify from '../features/auth/OTPVerify';
import PermissionsScreen from '../features/auth/PermissionsScreen';
import SignUpScreen from '../features/auth/SignUpScreen';
import WelcomeScreen from '../features/auth/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? 'light'];

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTPVerify"
        component={OTPVerify}
        options={{ title: 'Verify Code' }}
      />
      <Stack.Screen
        name="Permissions"
        component={PermissionsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
