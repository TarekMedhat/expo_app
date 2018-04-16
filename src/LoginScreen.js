import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Input, SignFooter } from './common';
import CheckboxGroup from 'react-native-checkbox-group'


export default class LoginScreen extends React.Component {
   constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  _onLoginPressed() {
    if (this.state.username&&this.state.password) {
        this.props.navigation.navigate('App');
    }
    else {Alert.alert(
  'Login Error',
  'The username or password fields are empty.',
  [
    
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}
  }
  _onSignupPressed() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.loginForm}>
          <Input
            label='Username'
            placeholder='Enter your username'
            secureTextEntry={false}
            onChangeText={(username) => this.setState({ username  }) }
          />
          <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry
            onChangeText={(password) => this.setState({ password }) }
          />
          <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
            </View>
            <SignFooter firstText="YOU DON'T HAVE AN ACCOUNT? " secondText="SIGNUP NOW" onPress={this._onSignupPressed.bind(this)}/>
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

    
    loginForm: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});

