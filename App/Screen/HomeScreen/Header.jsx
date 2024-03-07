import { View, Text, StyleSheet, Image } from 'react-native'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
    const {user} = useUser();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 39, height: 39, borderRadius: 99 }}
      />
      <Text style={styles.logoText}>
        Free<Text style={{ color: Colors.PRIMARY }}>Space</Text>
      </Text>
      <FontAwesome name="filter" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  logoText: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  }, 
  container: {
    borderRadius: 12,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.WHITE_TRANSP
  }
});