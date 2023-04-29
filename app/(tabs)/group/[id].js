import { View, Text } from "react-native";
import { Stack, useSearchParams } from "expo-router";

export default function GroupDetailPage() {
  const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Group #${id}` }} />

      <Text>Group: {id}</Text>
    </View>
  );
}
