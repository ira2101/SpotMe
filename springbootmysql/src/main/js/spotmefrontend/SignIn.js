//add logo
//import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal, Pressable } from 'react-native';
// import './global.js'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { SafeAreaView, Image } from "react-native";


// global.loginemail = ""
// let userdata;

function SignIn({ navigation }) {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [user, setUser] = useState({
  //   userEmail: "",
  //   userPassword: ""
  // });

  function checkUser(email, password) {


    return fetch(localhost + '/users/logIn/' + email + "/" + password, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData == 0) {
          navigation.navigate('About')
        } else {
          setModalVisible(true)
        }
        return responseData;
      })
      .catch(error => console.warn(error));
  }
  emailparking = email;

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wrong Login details</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <View style = {styles.loginTop}> */}
      <Image
        source={require("./assets/SpotMeLogo.png")}
        style={styles.signInIcon}
      />
      {/* </View> */}
      <View style={styles.loginBtm}>

          <TextInput
            style={styles.inputText}
            onChangeText={(email) => setEmail(email)}
            // value={this.state.email}
            placeholder="Email"

          />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            // value={this.state.password}
            placeholder="Password"
          />
          <Text style={styles.forgot}>Forgot Password?</Text>





        {/* () => this.props.navigation.navigate('Home', { 
                userEmail: this.state.email
              }) */}

          <TouchableOpacity style={styles.loginButton} onPress={() => { checkUser(email, password) }}>

            <Text style={styles.loginButtonWord}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Password')}>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.other}>Don't have an account? Sign up!</Text>
          </TouchableOpacity>

      </View>
    </View>
  );


}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',

    height: "100%"

  },
  logo: {
    fontWeight: 'bold',
    fontSize: 55,
    marginBottom: 150
  },
  inputLabel: {
    fontSize: 20,
    alignItems: 'center',
    marginTop: 10,

  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 30,
    height: 55,
    width: 340,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 3
  },
  loginButtonWord: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  other: {
    fontWeight: 'bold',
    fontSize: 15,
    color: "grey"
  },
  inputText: {
    textAlign: "left",
    fontSize: 15,
    height: 55,
    width: 340,
    margin: 12,
    backgroundColor: '#e5e5e5',
    borderRadius: 30,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#ababab',

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  signInIcon: {
    resizeMode: "center",
    width: "70%",
    height: "10%",
    marginBottom: 70,
    marginTop: 70
  },
  forgot: {
    color: "#666",
    fontWeight: "700",
    marginLeft: "53%"
  },
  loginBtm: {
    paddingTop: 40,
    height: "100%",
    width: "100%",
    backgroundColor: "#777",
    alignItems: "center",
    borderRadius: 50
  },
  loginTop: {
    // height: "30%"
  }
  // logoContainer: {
  //   width: "40%",
  //   height: "40%"
  // }
});

export default SignIn;