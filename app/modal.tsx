import { Ionicons } from '@expo/vector-icons';
import { View, Text, FlatList, ListRenderItem, Image, Pressable } from 'react-native';

import data from '@/assets/data.json';
import useCartStore from '@/store/cartStore';
import { Product } from '@/store/interfaces';

export default function ModalScreen() {
  const { addToCart, removeFromCart, products, clearCart, totalCartPrice, totalItems } =
    useCartStore();

  const renderItem: ListRenderItem<Product & { quantity: number }> = ({ item }) => {
    return (
      <View className="flex-row items-center mb-6 shadow-md bg-slate-50 py-6 px-2 rounded-lg w-full">
        <Image
          source={{ uri: item.image }}
          width={50}
          height={50}
          style={{ objectFit: 'contain', marginRight: 10 }}
        />
        <View style={{ flex: 2 }}>
          <Text
            className="font-bold text-lg text-left mr-10"
            textBreakStrategy="highQuality"
            numberOfLines={2}>
            {item.title}
          </Text>
          <Text className="font-normal">${item.price}</Text>
        </View>
        <View className="flex-row h-full items-center">
          <Pressable onPress={() => removeFromCart(item)}>
            <Ionicons name="remove" size={20} color="#000" />
          </Pressable>
          <Text className="font-bold">{item.quantity}</Text>
          <Pressable onPress={() => addToCart(item)}>
            <Ionicons name="add" size={20} color="#000" />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white p-2">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          totalItems() > 0 ? (
            <Text className="text-2xl font-bold">Total: ${totalCartPrice()}</Text>
          ) : null
        }
      />

      <Pressable
        className="p-4 bg-red-400 items-center justify-center rounded-lg shadow-md active:shadow-sm"
        onPress={clearCart}>
        <Text className="text-white text-xl font-bold uppercase">Clear Cart</Text>
      </Pressable>
    </View>
  );
}
