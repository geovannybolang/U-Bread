import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {PP} from '../../assets';
import { Button, ButtonW, Gap, HeaderCenter, Rectangle } from '../../components';
const Account = ({navigation}) => {
  return (
    <View>
      <HeaderCenter title="Account" />
      <View style={styles.container}>
      <PP style={styles.PP}/>
      </View>
      <View style={styles.contentWrapper}>
      <Text style={styles.name}>Mawar Tumewu</Text>
      <Gap height={60} />
        <Button
          title="Log Out"
          onPress={() => navigation.navigate('SplashScreen')} />
          <Gap height={29} />
        <ButtonW
          title="About"
          onPress={() => navigation.navigate('About')} />
          <Gap height={29} />
          <Button
          title="Back"
          onPress={() => navigation.navigate('Home')} />
          </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: '#FEC58C',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  name: {
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Inter-Bold',

  },

  PP: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentWrapper:{
    backgroundColor: '#FEC58C',
    paddingHorizontal: 24,
    paddingBottom: 1000,
  },

});
