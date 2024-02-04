import '../global.css';

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerTitle: 'Your Cart',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
