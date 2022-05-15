import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {PP} from '../../assets';
import { Button } from '../../components';
import { ButtonW } from '../../components';
const Account = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Account</Text>
      <View style={styles.pic}>
        <PP />
      </View>
      <Text style={styles.name}>Mawar Tumewu</Text>
      <View style={styles.logout}>
        <Button
          title="Log Out"
          onPress={() => navigation.navigate('SplashScreen')} />
      </View>
      <View style={styles.about}>
        <ButtonW
          title="About"
          onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FEC58C',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    left: 72,
    top: 25,
  },
  pic: {
    left: 157,
    top: 72,
    // width: 101,
    // height: 100,
    // backgroundColor: 'black',
  },
  logout: {
      top: 150,
      width: 350,
      left: 30,
  },
  name: {
      color: 'black',
      fontSize: 17,
      top: 90,
    left: 150,
  },
  about: {
    top: 170,
    width: 350,
    left: 30,
  },
});
