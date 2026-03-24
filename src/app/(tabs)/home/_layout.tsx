import { useUser } from "@clerk/expo";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function HomeLayout() {
  const { user } = useUser();

  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerBlurEffect: "light",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                <Image
                  source={user?.imageUrl}
                  style={{ width: 32, height: 32, borderRadius: 16 }}
                />
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          headerTransparent: true,
          headerBackButtonDisplayMode: "minimal",
          headerBlurEffect: "light",
        }}
      />
    </Stack>
  );
}
