import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import Colors from './../../Utils/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
      useWarmUpBrowser();
      const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

      const onPress = async () => {
                try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
      }
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <Text style={styles.logoText}>
        Free<Text style={{ color: Colors.PRIMARY }}>Space</Text>
      </Text>
      <Image
        source={require("./../../../assets/images/sv-estacionamiento_sF.jpg")}
        style={styles.bgImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>Welcome to FreeSpace</Text>
        <Text style={styles.description}>
          The best application to help you find the best place let's go
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Login With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    logoText: {
        textAlign: 'center',
        fontFamily: 'outfit-bold',
        fontSize: 40,
    },
    bgImage:{
        width: '80%',
        height: 280,
        marginTop: 20,
        objectFit: 'cover'
    },
    heading: {
        fontFamily: 'outfit-bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20
    },
    description: {
        fontSize: 17,
        fontFamily: 'outfit',
        marginTop: 15,
        textAlign: 'center',
        color: Colors.BLACK,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        display: 'flex',
        borderRadius: 99,
        marginTop: 40,
        textAlign:'center'
    }
})