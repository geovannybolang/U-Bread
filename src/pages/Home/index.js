import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header } from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.container}>
          <Text style={styles.Text}>
            Logo
          </Text>
          <Text style={styles.Text2}>
            Menu
          </Text>
        </View>
        <View styles={styles.contentWrapper2}>
          <Text>Test</Text>
        </View>
      </View>
    </View>
  )
}

export default Home;

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
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  
  contentWrapper2: {
    // paddingLeft: 24,
    // paddingVertical: 38,
    // paddingBottom: 24,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  Text: {
    paddingTop: 17,
    paddingLeft: 9,
    paddingRight: 101,
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
  }
})