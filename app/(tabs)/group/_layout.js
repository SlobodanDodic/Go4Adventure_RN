import { Stack } from "expo-router";

export default function GroupLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0d4969" },
        headerTintColor: "#e6e6e6",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Group" }} />
    </Stack>
  );
}
