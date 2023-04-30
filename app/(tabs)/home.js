import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import styles from "../../styles/home";
import SingleCard from "../../components/SingleCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.search}
        placeholder="Search all activities by name..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <SingleCard />
    </View>
  );
}
