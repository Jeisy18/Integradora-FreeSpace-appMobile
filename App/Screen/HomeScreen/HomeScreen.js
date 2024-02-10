import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'
import React from 'react'
import AppMapView from './AppMapView'

export default function HomeScreen() {
  return (
    <View>
        <View style={styles.headerContainer}>
            <Header/>
        </View>
        <AppMapView/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 15,
    width: '100%'
  }
})