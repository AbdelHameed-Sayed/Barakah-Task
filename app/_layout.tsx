import React, {useEffect} from 'react';

import {DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import {styled} from 'nativewind';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {store} from '@/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const StyledSafeAreaView = styled(SafeAreaView);
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <StyledSafeAreaView className="flex-1">
      <ThemeProvider value={DefaultTheme}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Stack
              initialRouteName="(tabs)"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="productDetail" />
            </Stack>
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </StyledSafeAreaView>
  );
}
