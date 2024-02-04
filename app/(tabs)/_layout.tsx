import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, View, Text } from 'react-native';

import useCartStore from '@/store/cartStore';

function CartButton() {
  const { products } = useCartStore();

  return (
    <View>
      <Link href="/modal" asChild>
        <Pressable style={{ marginRight: 20 }}>
          {({ pressed }) => <FontAwesome5 name="shopping-bag" size={24} color="#000" />}
        </Pressable>
      </Link>
      <View className="h-6 w-6 bg-red-500 rounded-full items-center justify-center absolute -top-1 left-3">
        <Text className="text-white text-sm font-bold">
          {products.reduce((prev, curr) => prev + curr.quantity, 0)}
        </Text>
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
