import { Avatar, List, Card, Text, Button, Chip, DataTable } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import CarouselView from "./CarouselView";

export default function SingleCard({ el }) {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  let iconColor;
  if (el.icon === "tree") {
    iconColor = "#347C17";
  } else if (el.icon === "fish") {
    iconColor = "#2B65EC";
  } else {
    iconColor = "#82CAFF";
  }

  const IconContent = () => {
    return <Avatar.Icon color="white" icon={el.icon} style={{ backgroundColor: iconColor }} size={44} />;
  };

  return (
    <Card style={styles.container}>
      <Card.Title title={el.title} left={IconContent} titleVariant="titleMedium" titleNumberOfLines="2" />

      <Text variant="labelLarge" style={styles.comment}>
        "{el.comment}"
      </Text>

      <Card.Cover
        style={styles.cover}
        source={{
          uri: el.coverImg,
        }}
      />

      <Card.Content>
        <Text variant="labelLarge" style={{ fontWeight: "bold", color: "#0d4969" }}>
          {el.category}
        </Text>
        <Text variant="labelLarge" style={{ fontWeight: "bold", color: "#545454" }}>
          Tour includes: {el.subcategory}
        </Text>
        <View style={styles.chipView}>
          <Chip icon="currency-eur" mode="outlined" style={styles.chip}>
            Price: {el.price}
          </Chip>
          <Chip icon="account-injury" mode="outlined" style={styles.chip}>
            Level: {el.level}/10
          </Chip>
        </View>
      </Card.Content>

      <Card.Actions style={styles.action}>
        <List.Section style={styles.section}>
          <List.Accordion
            style={styles.accord}
            title="More informations"
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="information" />}
            titleStyle={{ fontWeight: "500", color: "#424243", fontSize: 15 }}
          >
            <Text variant="labelSmall" style={styles.text}>
              {el.text}
            </Text>

            <CarouselView images={el.images} />

            {/* <Button
              icon="map-marker"
              mode="text"
              onPress={() => console.log("Pressed")}
              style={{ paddingLeft: 0, padding: 5 }}
            >
              More about dates & locations
            </Button> */}
            <DataTable style={{ marginTop: 10, paddingLeft: 0 }}>
              <DataTable.Row>
                <DataTable.Cell>Starts:</DataTable.Cell>
                <DataTable.Cell>{el.date}</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Tour length:</DataTable.Cell>
                <DataTable.Cell>{el.length} days</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Age range:</DataTable.Cell>
                <DataTable.Cell>{el.age} years old</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </List.Accordion>
        </List.Section>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
  },
  cover: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  comment: {
    fontWeight: "thin",
    letterSpacing: 1,
    color: "#757575",
    textAlign: "center",
    fontStyle: "italic",
    paddingBottom: 10,
  },
  action: {
    marginHorizontal: 10,
  },
  section: {
    width: "100%",
  },
  accord: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingHorizontal: 0,
  },
  text: {
    paddingLeft: 5,
    padding: 15,
    textAlign: "justify",
  },
  chipView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
