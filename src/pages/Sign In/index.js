import React from 'react';
import {Header, Button, TextInput, Gap} from '../../components';
import {StyleSheet, Text, View} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.contentWrapper}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={30} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={50} />
        <Button title="Sign In" />
        <Gap height={50} />
        <Text style={styles.Text}>Don't have account?</Text>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: '#FEC58C',
    paddingHorizontal: 24,
    paddingTop: 26,
  },

  Text: {
    textAlign: 'center',
  },
});
