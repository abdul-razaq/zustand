import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: 'Shop',
          headerTitle: 'Shop',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{ marginRight: 10 }}>
                {({ pressed }) => <FontAwesome5 name="shopping-bag" size={20} color="#000" />}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="tabs2"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
