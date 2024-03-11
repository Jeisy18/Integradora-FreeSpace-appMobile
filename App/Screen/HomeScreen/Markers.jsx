import { View, Text, Image } from "react-native";
import { Marker } from "react-native-maps";
import React from "react";

export default function Markers({ place }) {
  return (
    place && (
      <Marker
        coordinate={{
          latitude: place.location?.latitude,
          longitude: place.location?.longitude,
        }}
      >
        <Image
          source={require("./../../../assets/images/markerParking.png")}
          style={{ width: 30, height: 30 }}
        />
      </Marker>
    )
  );
}
