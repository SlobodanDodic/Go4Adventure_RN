import { Stack } from "expo-router";

export default function GroupLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Group" }} />
    </Stack>
  );
}
