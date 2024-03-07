import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import GlobalApi from "../../Utils/GlobalApi";

export default function PlaceItem({ place }) {
  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get("screen").width * 0.9,
      }}
    >
      <Image
        source={
          place?.photos?
          {uri:PLACE_PHOTO_BASE_URL+place?.photos[0]?.name+
          "/media?key="+GlobalApi?.API_KEY+"&maxHeightPx=800&maxWidthPx=1200"}
          :require("./../../../assets/images/sv-estacionamiento_sF.jpg")
        }
        style={{ width: "100%", borderRadius: 10, height: 130 }}
      />
      <View style={{ padding: 15, height: 80 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontFamily: "outfit-medium",
          }}
        >
          {place.displayName?.text}
        </Text>
        <Text
          style={{
            paddingBottom: 5,
            textAlign: "center",
            color: Colors.GRAY,
            fontFamily: "outfit",
          }}
        >
          {place?.shortFormattedAddress}
        </Text>
      </View>
    </View>
  );
}
