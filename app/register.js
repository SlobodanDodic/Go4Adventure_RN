import { View, Text, ViewBase } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Button } from "@rneui/themed";
import { SafeAreaView, TextInput, Image } from "react-native";
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

      <Button title="Login" onPress={handleLogin} style={styles.logBtn} radius={"sm"} />
    </SafeAreaView>
  );
}
