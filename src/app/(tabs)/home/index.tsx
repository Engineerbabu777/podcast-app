import { FlatList, StyleSheet, Text, View } from "react-native";

import { PodcastCard } from "@/components/PodcastCard";
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
      <View style={styles.container}>
        <Text className="text-red-500">Loading...</Text>
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
