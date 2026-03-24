import { Stack } from "expo-router";

export default function LibraryLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerBlurEffect: "light",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Library" }} />
    </Stack>
  );
}
