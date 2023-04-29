import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  logoImage: {
    width: width - 80,
    resizeMode: "contain",
  },
  input: {
    width: width * 0.75,
    height: 40,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 7,
    padding: 10,
  },
  logBtn: {
    marginTop: 37,
    width: width * 0.75,
  },
});

export default styles;
