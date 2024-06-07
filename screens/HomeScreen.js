import React from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'

const HomeScreen = () => {
    return (
      <SafeAreaView>
        <Text style={styles.text}> I'm HomeScreen </Text>
      </SafeAreaView>
    )
  } ;

export default HomeScreen 

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
})
