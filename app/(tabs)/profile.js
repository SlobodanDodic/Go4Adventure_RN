import { View } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/">Log out</Link>
    </View>
  );
}
