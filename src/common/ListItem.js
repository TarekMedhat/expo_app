import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckboxGroup from 'react-native-checkbox-group'

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  itemStyle: {
    marginLeft: 24,
    marginTop:8,
    padding:0,
    alignSelf: 'stretch',
        borderColor: '#fff',
    backgroundColor: "#fff",

  },
  textStyle: {
    fontSize:16,
    paddingBottom:2

  },
  statusText: {
    alignSelf: 'flex-end',
    fontSize: 15
  },
  done: {
    color: 'green'
  },
  pending: {
    color: 'red'
  }
});

const ListItem = (props) => {
  const statusStyle = props.status ? styles.done : styles.pending
  return(
    <View style={styles.listItem}>
      <CheckboxGroup
              callback={(selected) => { console.log(selected) }}
              iconColor={"#00a2dd"}
              iconSize={30}
              checkedIcon="ios-checkbox-outline"
              uncheckedIcon="ios-square-outline"
              checkboxes={[
                { label:props.item,
                  value: 1, // selected value for item, if selected, what value should be sent? 
                  selected: false // if the item is selected by default or not. 
                },
              ]}
              labelStyle={{
                color: 'red',
                marginLeft:8,
                paddingTop:4,
                fontSize:16,
                fontWeight: 'bold'
              }}
              rowStyle={{
                flexDirection: 'row',
                marginLeft:24
              }}
              rowDirection={"column"}
            />
    </View>
  );
};


export { ListItem };
