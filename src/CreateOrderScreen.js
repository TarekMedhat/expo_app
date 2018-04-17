import React, { Component } from 'react';
import { Alert, SectionList, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { sectionListData } from './sectionListData';
import { Button, ListItem } from './common';


class SectionListItem extends Component {
    
    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
                borderWidth:1,
                borderColor:"#ddd",
                borderBottomWidth:0
            }}>
                <ListItem item={this.props.item.name} checked={this.props.checked} onPress={this.props.onPress} status={true}/>
                <Text style={{
                    fontSize: 16,
                    marginLeft: 24,
                    marginRight: 10,
                    marginBottom:8,
                    color: '#000',
                }}>{this.props.item.description}
                </Text>
                <View style={{backgroundColor: 'rgb(77,120, 140)', height: 1, margin: 4, marginLeft: 20,marginRight: 10}}>
                </View>
            </View>
        );
    }
}
class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#666666',
                marginBottom:8,
                shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.section.title}
                </Text>
            </View>
        );
    }
}
export default class CreateOrderScreen extends Component {

        static navigationOptions = ({ navigation }) => {
      
      const logoutBtnStyle = { paddingRight: 12,};

  const headerRight = (
        <TouchableOpacity style={logoutBtnStyle} 
          onPress={() => navigation.navigate('Auth')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      );
      return {  headerRight };
    };
     
constructor(props) {
    super(props);
    this.state = {
        checked:'hi'
      }
  }
    _onCreateOrderPressed() {
           Alert.alert('Ordered created successfully!',
          'Lets assume that the order was created..!',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
  }

    render() {
        
        return (  
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <SectionList
                    renderItem={({ item, index }) => {
                        return (<SectionListItem item={item} checked={item.checked}>

                        </SectionListItem>);
                    }}
                    renderSectionHeader={({ section }) => {
                        return (<SectionHeader section={section} />);
                    }}
                    sections={sectionListData}
                    keyExtractor={(item, index) => item}
                >
                </SectionList>
                <Button  onPress={this._onCreateOrderPressed.bind(this)}>CREATE ORDER</Button>
            </View>
        );
    }
}
