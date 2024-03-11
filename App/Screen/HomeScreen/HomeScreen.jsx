import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import React, { useContext, useEffect, useState } from "react";
import AppMapView from "./features/AppMapView";
import SearchBar from "./features/SearchBar";
import PlaceListView from "./PlaceListView";
import { UserLocationContext } from "../../Context/UserLocationContext";
import GlobalApi from "../../Utils/GlobalApi";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    location && GetNearbyPlace();
  }, [location]);

  const GetNearbyPlace = () => {
    const data = {
      includedTypes: ["parking"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location?.latitude,
            longitude: location?.longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalApi.NewNearbyPlace(data).then((resp) => {
      setPlaceList(resp.data?.places);
    });
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
      </View>
      <AppMapView placeList={placeList} />
      <View style={styles.placeListContainer}>
        {placeList && <PlaceListView placeList={placeList} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 15,
    width: "100%",
  },
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
  },
});
