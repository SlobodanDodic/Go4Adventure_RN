import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0d4969" },
        headerTintColor: "#e6e6e6",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Login", headerShown: false }} />
      <Stack.Screen name="register" options={{ headerTitle: "Create account" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
