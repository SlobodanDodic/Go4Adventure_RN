import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "white",
    border: "1px solid lightgray",
  },
  safeview: {
    margin: 20,
  },
});

export default styles;
