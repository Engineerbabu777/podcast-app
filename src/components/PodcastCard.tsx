import { View, Text, Pressable, Image } from "react-native";
import { Feed } from "@/types";


interface PodcastCardProps {
  feed: Feed;
}



export function PodcastCard({ feed }: PodcastCardProps) {
  return (
    <Pressable className="flex-1 m-2 active:opacity-75 active:scale-[0.98] transition-all">
      <View className="relative shadow-xl shadow-black/10">
        <Image
          source={{ uri: feed.image || feed.artwork }}
          className="w-full aspect-square rounded-[24px] bg-gray-100"
          resizeMode="cover"
        />
        {feed.explicit && (
          <View className="absolute top-2 right-2 bg-black/40 px-1.5 py-0.5 rounded-md backdrop-blur-md">
            <Text className="text-[9px] font-bold text-white tracking-widest">E</Text>
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
    </Pressable>
  );
}
