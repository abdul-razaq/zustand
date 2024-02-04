import { Ionicons } from '@expo/vector-icons';
import { View, Text, FlatList, ListRenderItem, Image } from 'react-native';

import data from '@/assets/data.json';

export default function Home() {
  const renderItem: ListRenderItem<any> = ({ item }) => {
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
          <Ionicons name="remove" size={20} color="#000" />
          <Ionicons name="add" size={20} color="#000" />
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white p-2">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
