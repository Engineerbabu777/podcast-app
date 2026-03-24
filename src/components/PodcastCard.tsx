import { useState } from "react";
import { Feed } from "@/types";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { Shimmer } from "./Shimmer";

interface PodcastCardProps {
  feed: Feed;
}

export function PodcastCard({ feed }: PodcastCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <Link
      className="flex-1 m-2 active:opacity-75 active:scale-[0.98] transition-all"
      href={`/home/${feed.id}`}
    >
      <View className="relative shadow-xl shadow-black/10">
        {imageLoading && (
          <Shimmer
            className="w-full aspect-square rounded-[24px] absolute z-10"
            borderRadius={24}
          />
        )}
        <Image
          source={{ uri: feed.image || feed.artwork }}
          className="w-full aspect-square rounded-[24px] bg-gray-100"
          resizeMode="cover"
          onLoad={() => setImageLoading(false)}
        />
        {feed.explicit && (
          <View className="absolute top-2 right-2 bg-black/40 px-1.5 py-0.5 rounded-md backdrop-blur-md">
            <Text className="text-[9px] font-bold text-white tracking-widest">
              E
            </Text>
          </View>
        )}
      </View>
      <View className="mt-2 px-1">
        <Text
          className="text-[15px] font-semibold text-gray-900 tracking-tight leading-tight"
          numberOfLines={1}
        >
          {feed.title}
        </Text>
        <Text
          className="text-[13px] text-gray-500 font-medium mt-0.5"
          numberOfLines={1}
        >
          {feed.author || "Unknown"}
        </Text>
      </View>
    </Link>
  );
}
