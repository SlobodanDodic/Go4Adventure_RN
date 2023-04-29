import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Image, SafeAreaView, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import styles from "../styles/index";

export default function LoginPage() {
  const [text, setText] = useState("Username");
  const [password, setPassword] = useState("Password");
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image style={styles.logoImage} source={require("../assets/logo.png")} />

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={setText} value={text} />
          <TextInput style={styles.input} onChangeText={setPassword} value={password} />
        </SafeAreaView>

        <Button
          onPress={handleLogin}
          style={styles.logBtn}
          mode="contained"
          icon="login"
          textColor="white"
          buttonColor="#0d4969"
        >
          Login
        </Button>
        <Button
          onPress={() => router.push("/register")}
          style={styles.regBtn}
          mode="contained"
          icon="account"
          textColor="white"
          buttonColor="#0d4969"
        >
          Create account
        </Button>
      </View>
    </PaperProvider>
  );
}
