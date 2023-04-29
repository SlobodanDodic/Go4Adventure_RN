import { Link, useRouter } from "expo-router";
import { View, Pressable, Text } from "react-native";
// import styles from "../styles/index";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>

      <Link href="/register" asChild>
        <Pressable>
          <Text>Create account</Text>
        </Pressable>
      </Link>

      {/* <Link href="/test">Unmatched route</Link> */}
    </View>
  );
}
