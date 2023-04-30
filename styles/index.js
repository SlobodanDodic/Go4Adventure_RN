import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 140,
    padding: 24,
  },
  logoImage: {
    width: width - 47,
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
  regBtn: {
    marginTop: 20,
    width: width * 0.75,
  },
});

export default styles;
