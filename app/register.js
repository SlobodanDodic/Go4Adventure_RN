import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView, TextInput, Image } from "react-native";
import { Button } from "react-native-paper";
import styles from "../styles/register";

export default function RegisterPage() {
  const [name, setName] = useState("Username");
  const [fullname, setFullname] = useState("Full name");
  const [password, setPassword] = useState("Password");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");

  const router = useRouter();

  const handleLogin = () => {
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logoImage} source={require("../assets/logo.png")} />

      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <TextInput style={styles.input} onChangeText={setFullname} value={fullname} />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} />
      <TextInput style={styles.input} onChangeText={setConfirmPassword} value={confirmPassword} />

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
    </SafeAreaView>
  );
}
