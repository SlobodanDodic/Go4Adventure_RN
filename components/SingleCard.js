import { Avatar, List, Card, Text, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useState } from "react";

const LeftContent = () => <Avatar.Icon color="white" icon="walk" style={{ backgroundColor: "green" }} size={44} />;

export default function SingleCard() {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <Card style={styles.container}>
      <Card.Title
        title="Land-Based Activity"
        subtitle="Trekking and Hiking"
        left={LeftContent}
        titleVariant="titleLarge"
        subtitleVariant="labelLarge"
      />
      <Card.Content>
        <Text variant="labelLarge">Options:</Text>
        <Text variant="labelMedium" style={{ fontWeight: "bold" }}>
          Day hikes & Multi-day treks
        </Text>
      </Card.Content>
      <Card.Cover style={styles.img} source={require("../assets/images/hiking.jpg")} />

      <Card.Actions style={styles.action}>
        <List.Section style={styles.accord}>
          <List.Accordion
            title="More informations"
            left={(props) => <List.Icon {...props} icon="information" />}
            expanded={expanded}
            onPress={handlePress}
            style={{ backgroundColor: "white" }}
          >
            <Text variant="labelSmall" style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Button icon="map" mode="text" onPress={() => console.log("Pressed")} style={{ paddingLeft: 0 }}>
              More about prices, dates and locations
            </Button>
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
  img: {
    marginTop: 14,
    marginHorizontal: 14,
    borderBottomLeftRadius: 47,
  },
  action: {
    marginHorizontal: 10,
  },
  accord: {
    width: "100%",
  },
  text: {
    paddingLeft: 10,
    padding: 10,
    textAlign: "justify",
  },
});
