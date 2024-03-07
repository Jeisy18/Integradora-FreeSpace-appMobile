import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyB1Z4v-zkYpD5Zqvt25uP4vDUaY5Kg9mGE";

const config = {
  headers: {
    "content-type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.parkingOptions",
      "places.shortFormattedAddress",
      "places.photos",
    ],
  },
};

const NewNearbyPlace = (data) => axios.post(BASE_URL, data, config);

export default { NewNearbyPlace, API_KEY };
