import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {Logo} from '../../assets';
import {Back} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
const About = ({title, onPress}) => {
  return (
    <View>
      <Header />
      <Text style={styles.Text}>About</Text>
      <Logo style={styles.logo} />
      <View style={styles.container}>
        <Text style={styles.text}>
          Aplikasi ini menyediakan fitur menu makanan dan minuman, diantaranya
          beberapa jenis roti dan ice cream. Diharapkan dengan hadirnya U-Bread
          dapat membantu para konsumen untuk mengetahui makanan dan minuman yang
          kami tawarkan.
        </Text>
        <Text style={styles.text1}>
          U-Bread menyediakan fitur-fitur yang di dalamnya fitur itu dapat
          membantu mempermudah para konsumen untuk membeli makanan maupun
          minuman.
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 30,
    top: -50,
    left: 160,
  },
  abt: {
    height: 40,
    backgroundColor: '#4B6BA5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container: {
    width: 297,
    height: 100,
    // backgroundColor: 'black',
    left: 55,
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  logo: {
    left: 100,
  },
  text1: {
    color: 'black',
    fontSize: 15,
    top: 30,
  },
  back: {
    // backgroundColor: 'orange',
  },
});
