import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { data } from "../../components/eventsData";

export default function Map() {
  const mapRef = useRef();

  const showLocationsOfInterest = () => {
    return data.map((item, index) => {
      return <Marker key={index} coordinate={item.location} title={item.title} description={item.category} />;
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        style={styles.map}
        onRegionChange={(region) => console.log(region)}
        initialRegion={{ latitude: 49.44, latitudeDelta: 28.3523, longitude: 21.011, longitudeDelta: 26.64 }}
      >
        {showLocationsOfInterest()}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapOverlay: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    left: "25%",
    width: "50%",
    textAlign: "center",
  },
});
