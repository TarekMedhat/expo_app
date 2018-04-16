import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Input, SignFooter } from './common';

export default class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      mobile:''
    };
  }

  _onSigninPressed() {
    this.props.navigation.goBack();
  }
  _onSignupPressed() {
    if (this.state.username&&this.state.password&&this.state.mobile) {
      this.props.navigation.goBack();
    }
    else {
      Alert.alert(
  'Register Error',
  'The username or password or mobile fields are empty.',
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.loginForm}>
          <Input
            label='Username'
            placeholder='Enter your Username'
            secureTextEntry={false}
            maxLength={20}
            onChangeText={(username) => this.setState({ username }) }
          />
          <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry
            onChangeText={(password) => this.setState({ password }) }
          />
          <Input
            label='Mobile'
            keyboardType='phone-pad'
            maxLength={15}
            placeholder='Enter your Mobile number'
            onChangeText={(mobile) => this.setState({ mobile }) }
          />
          <Button onPress={this._onSignupPressed.bind(this)}>Sign Up</Button>
          
            </View>
            <SignFooter firstText="ALREADY HAVE AN ACCOUNT? " secondText="SIGNIN NOW" onPress={this._onSigninPressed.bind(this)}/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    },

    signup: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    flexDirection: 'row',
    padding:10
    // justifyContent: 'center',
  },
    loginForm: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
    // justifyContent: 'center',
  },
});