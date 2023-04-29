import { View } from "react-native";
import { Link } from "expo-router";

export default function GroupPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/group/land-based">Land-Based Activities</Link>
      <Link href="/group/water-based">Water-Based Activities</Link>
      <Link href="/group/aerial_extreme">Aerial & Extreme Sports</Link>
    </View>
  );
}
