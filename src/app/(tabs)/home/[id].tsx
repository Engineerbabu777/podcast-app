import { Shimmer } from "@/components/Shimmer";
import { fetchFeedById } from "@/services/podcast-index";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PodcastDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["podcast", id],
    queryFn: async () => {
      const response = await fetchFeedById(id as string);
      return response as any;
    },
  });

  const podcast = data?.feed || data?.feeds;

  if (isLoading) {
    return (
      <View className="flex-1 bg-white">
        <View className="px-5 pt-12 pb-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-12 h-12 bg-gray-50 rounded-full items-center justify-center shadow-sm border border-gray-100"
          >
            <SymbolView
              name="chevron.left"
              size={24}
              type="monochrome"
              tintColor="#000"
            />
          </TouchableOpacity>
        </View>
        <View className="items-center px-6">
          <Shimmer className="w-64 aspect-square rounded-[32px]" />
          <View className="mt-8 items-center gap-2 w-full">
            <Shimmer width="80%" height={28} borderRadius={8} />
            <Shimmer width="40%" height={18} borderRadius={6} />
          </View>
          <View className="mt-8 gap-2 w-full">
            <Shimmer width="100%" height={14} borderRadius={4} />
            <Shimmer width="100%" height={14} borderRadius={4} />
            <Shimmer width="80%" height={14} borderRadius={4} />
          </View>
        </View>
      </View>
    );
  }

  if (error || !podcast) {
    return (
      <View className="flex-1 justify-center items-center bg-white p-6">
        <Text className="text-red-500 font-bold text-center">
          {error ? (error as Error).message : "Failed to load podcast details"}
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 bg-gray-100 px-6 py-2 rounded-full"
        >
          <Text className="font-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerClassName="items-center px-6 py-8"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Image
        className="w-60 h-60 rounded-2xl"
        source={{ uri: podcast.artwork || podcast.image }}
      />

      <Text className="text-xl font-bold text-center mt-5">
        {podcast.title}
      </Text>

      <Text className="text-sm text-gray-400 mt-1">{podcast.author}</Text>

      {podcast.description ? (
        <View className="mt-5 self-stretch">
          <Text
            className="text-sm text-gray-600 leading-5"
            numberOfLines={showFullDescription ? undefined : 4}
          >
            {podcast.description}
          </Text>
          <Pressable
            onPress={() => setShowFullDescription(!showFullDescription)}
          >
            <Text className="text-sm font-medium text-blue-500 mt-1">
              {showFullDescription ? "LESS" : "MORE"}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </ScrollView>
  );
}
