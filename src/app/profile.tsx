import { useUser, useAuth } from "@clerk/expo";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Stack } from "expo-router";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();

  if (!user) return null;

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Stack.Screen 
        options={{ 
          title: "Profile",
          headerLargeTitle: true,
          headerShadowVisible: false,
        }} 
      />
      
      <View style={styles.header}>
        <Image
          source={user.imageUrl}
          style={styles.avatar}
          contentFit="cover"
          transition={200}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.fullName || user.username || "User"}</Text>
          <Text style={styles.email}>
            {user.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            styles.signOutButton,
            pressed && styles.pressed
          ]}
          onPress={() => signOut()}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    gap: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f0f0f0",
  },
  userInfo: {
    alignItems: "center",
    gap: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    width: "100%",
    marginTop: 20,
  },
  button: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signOutButton: {
    backgroundColor: "#ff3b3015",
  },
  signOutText: {
    color: "#ff3b30",
    fontSize: 17,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.7,
  },
});
