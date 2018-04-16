import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signup: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginVertical:25,
     fontSize: 14,
    // justifyContent: 'center',
  },
 
});

const SignFooter = (props) => {
  return (
     <View style={styles.signup}>
          <Text>{props.firstText}</Text>
          <Text style={{color: 'red', textDecorationLine:'underline'}} onPress={props.onPress}>{props.secondText}</Text>
     </View>
  );
}

export { SignFooter };
