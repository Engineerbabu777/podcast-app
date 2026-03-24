import { FlatList, StyleSheet, Text, View } from "react-native";

import { PodcastCard } from "@/components/PodcastCard";
import { Shimmer } from "@/components/Shimmer";
import { fetchTrending } from "@/services/podcast-index";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: () => getTrendingPodcasts(),
  });

  const getTrendingPodcasts = async () => {
    const response = await fetchTrending();
    return response;
  };

  if (isLoading) {
    return (
      <View className="flex-1 bg-gray-50 p-2">
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item) => item.toString()}
          numColumns={2}
          renderItem={() => (
            <View className="flex-1 m-2">
              <Shimmer className="w-full aspect-square rounded-[24px]" />
              <View className="mt-2 px-1 gap-2">
                <Shimmer width="80%" height={16} borderRadius={4} />
                <Shimmer width="60%" height={12} borderRadius={4} />
              </View>
            </View>
          )}
          columnWrapperClassName="justify-between"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text className="text-red-500">Error: {(error as Error).message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data?.feeds}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PodcastCard feed={item} />}
      numColumns={2}
      contentInsetAdjustmentBehavior="automatic"
      className="flex-1 bg-gray-50"
      contentContainerClassName="p-2"
      columnWrapperClassName="justify-between"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
