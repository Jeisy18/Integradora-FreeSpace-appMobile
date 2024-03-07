import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import React from "react";
import Colors from "../../../Utils/Colors";

export default function SearchBar({ searchedLocation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 5,
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder="Buscar Estacionamientos cercanos"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          searchedLocation(details?.geometry?.location);
        }}
        query={{
          key: "AIzaSyB1Z4v-zkYpD5Zqvt25uP4vDUaY5Kg9mGE",
          language: "en",
        }}
      />
    </View>
  );
}
