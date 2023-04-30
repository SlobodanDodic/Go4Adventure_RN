import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  search: {
    marginHorizontal: 20,
    backgroundColor: "white",
    border: "1px solid lightgray",
  },
});

export default styles;
