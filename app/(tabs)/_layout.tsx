import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, Text } from 'react-native';

import useCartStore from '@/store/cartStore';

function CartButton() {
  const { totalItems } = useCartStore();

  return (
    <View>
      <Link href="/modal" asChild>
        <Pressable style={{ marginRight: 20 }}>
          {({ pressed }) => <Ionicons name="cart" size={26} color="#000" />}
        </Pressable>
      </Link>
      <View className="h-5 w-5 bg-red-500 rounded-full items-center justify-center absolute top-0 left-4">
        <Text className="text-white text-xs font-bold">{totalItems()}</Text>
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
          tabBarStyle: {
            elevation: 0,
            shadowColor: 'transparent',
          },
          tabBarLabel: 'Shop',
          headerTitle: 'Shop',
          headerTitleAlign: 'center',
          headerRight: () => <CartButton />,
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
