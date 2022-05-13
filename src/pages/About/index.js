import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text style={styles.Text}>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  Text: {
    color: 'black',
  }
})