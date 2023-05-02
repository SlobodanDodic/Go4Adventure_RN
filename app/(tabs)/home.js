import { useState } from "react";
import { Searchbar, SegmentedButtons } from "react-native-paper";
import { ScrollView, View } from "react-native";
import SingleCard from "../../components/SingleCard";
import { data } from "../../components/eventsData";
import styles from "../../styles/home";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [value, setValue] = useState("");

  const filteredData = data?.filter((el) => el.group?.includes(value));

  return (
    <View style={styles.container}>
      <View>
        <Searchbar
          style={styles.search}
          placeholder="Search all activities by name..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <SegmentedButtons
          style={styles.safeview}
          value={value}
          onValueChange={setValue}
          checkedColor="#b2b2b2"
          buttons={[
            { value: "land", label: "Land", icon: "tree" },
            { value: "water", label: "Water", icon: "fish" },
            { value: "aerial", label: "Aerial&Extreme", icon: "bird" },
          ]}
        />
      </View>

      <ScrollView>
        {filteredData?.map((el) => (
          <SingleCard key={el.id} el={el} />
        ))}
      </ScrollView>
    </View>
  );
}
