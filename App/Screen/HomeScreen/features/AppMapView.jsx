import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useContext } from "react";
import MapViewStyle from "../../../Utils/MapViewStyle.json";
import MapViewStyleRetro from "../../../Utils/MapViewStyleRetro.json";
import { UserLocationContext } from "../../../Context/UserLocationContext";
import Markers from "../Markers";

export default function AppMapView({ placeList }) {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <View>
        <MapView
          showsCompass={false}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          {location ? (
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
            >
              <Image
                source={require("./../../../../assets/images/car.png")}
                style={{ width: 30, height: 30 }}
              />
            </Marker>
          ) : null}

          {placeList &&
            placeList.map((item, index) => (
              <Markers key={index} place={item} />
            ))}
        </MapView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
