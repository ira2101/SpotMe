import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


export default class LoginScreen extends Component {

    handleLoginButton = () => {
        this.props.navigation.replace('AfterLogin');
    
      }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>If successfully verified, this button will take the user to the homepage.</Text>
        <Button onPress={this.handleLoginButton} title='Open AfterLogin' />
      </View>
    );
  }
}