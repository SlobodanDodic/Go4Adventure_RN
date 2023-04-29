import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Image, SafeAreaView, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../styles/index";

export default function LoginPage() {
  const [text, setText] = useState("Username");
  const [password, setPassword] = useState("Password");
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require("../assets/logo.png")} />

      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <TextInput style={styles.input} onChangeText={setPassword} value={password} />
      </SafeAreaView>

      <Button title="Login" onPress={handleLogin} style={styles.logBtn} radius={"sm"} />
      <Button title="Create account" onPress={() => router.push("/register")} style={styles.regBtn} radius={"sm"} />
    </View>
  );
}
