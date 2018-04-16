import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    height: 40
  },
  label: {
    fontSize: 16,
    marginLeft:25,
    flex: 1
  },
  input: {
          marginRight: 25,
    fontSize: 16,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    flex: 3
  }

});

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>

      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        autoCorrect={false}
        maxLength={props.maxLength}
        autoCapitalize='none'
        onChangeText={props.onChangeText}
        style={styles.input} />
    </View>
  );
};


export { Input }
