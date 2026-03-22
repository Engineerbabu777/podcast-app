import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: true }} />
      <Stack.Screen name="sign-up" options={{ headerShown: true }} />
    </Stack>
  );
}
