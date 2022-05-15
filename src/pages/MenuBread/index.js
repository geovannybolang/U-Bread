import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '../../components';

const HomeBread = () => {
  return (
    <View style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <Text style={styles.Text}>
            Logo
          </Text>
          </View>
          <View style={styles.container2}>
          <Text style={styles.Text}>
            Menu
          </Text>
          </View>
          <View style={styles.container3}>
          <Text style={styles.Text}>
            Logo
          </Text>
          </View>
      </View>
    </View>
  )
}

export default HomeBread;

const styles = StyleSheet.create({
  page: {
    flex:1,
  },
  
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentWrapper: {
    // paddingLeft: 24,
    // paddingVertical: 38,
    // paddingBottom: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  
  contentWrapper2: {
    // paddingLeft: 24,
    // paddingVertical: 38,
    // paddingBottom: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentWrapper3: {
    // paddingLeft: 24,
    // paddingVertical: 38,
    // paddingBottom: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },


  Text: {
    paddingTop: 17,
    paddingLeft: 9,
    paddingHorizontal: 90,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },

  Text2: {
    paddingTop: 17,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    // alignSelf: 'flex-start',
    // flexDirection: 'column',
  },

  Text3: {
    paddingTop: 17,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    
  },
})