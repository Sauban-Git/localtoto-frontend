// RootNavigator
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationThemes } from '@/constants/theme';
import { AuthContext } from '@/src/store/AuthContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? NavigationThemes.dark : NavigationThemes.light;

  const login = React.useCallback(() => setIsLoggedIn(true), []);
  const logout = React.useCallback(() => setIsLoggedIn(false), []);

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        <NavigationContainer theme={theme}>
          {isLoggedIn ? <MainStack initialRouteName="BookERickshaw" /> : <AuthStack />}
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
