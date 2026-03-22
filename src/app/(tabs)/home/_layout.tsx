import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import { useUser } from "@clerk/expo";

export default function HomeLayout() {
  const { user } = useUser();

  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                <Image 
                  source={user?.imageUrl} 
                  style={{ width: 32, height: 32, borderRadius: 16 }} 
                />
              </Pressable>
            </Link>
          )
        }} 
      />
    </Stack>
  );
}
