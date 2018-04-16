import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, ActivityIndicator, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(42, 55, 68)',
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  }
});

class Splash extends Component {

  componentDidMount() {
  this._navigate();   
  }

    //Added this dummy method to cause a delay just to see the splash
  _navigate() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2500 );

  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./res/ic_launcher.png')} style={styles.image}/>
        <ActivityIndicator size={'small'} />
        <Text style={styles.loadingText}>Loading ...</Text>
      </View>
    );
  }
}

export default Splash;
