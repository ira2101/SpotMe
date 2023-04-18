import React, { useState, useEffect}from 'react';
import { StyleSheet,Header, FlatList, Text, ScrollView, TextInput,SafeAreaView, Image, View, Platform, StatusBar, Button, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Header } from 'react-native-elements';
// import axios from 'axios';



const Password = () => {
  const [email, setEmail] = useState('');
  // const [firstName, setfirstName] = useState([]);
  // const [lastName, setlastName] = useState([]);
  //const [confirm, setConfirm] = useState([]);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // const data = { 
  //   /*email: data.email,
  //   firstName: data.firstName,
  //   lastName: data.lastName,
  //   password: data.password*/
  
        
  //       email: "uu",
  //  firstName: "maker",
  //        lastName: "bye",
  //       password: "hello"
        
  // };
  
  function updatepass(password) {
    fetch(localhost + '/users/forgotpassword/' + password + '/' +  email, {
        method: 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(
            function(response) {
                if (response.status === 200 || response.status === 201) {
                    // Successful POST
                    console.log('good');
                } else {
                    // Examine the text in the response
                    console.log('issue');
                }
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
  }
  const shoot = () => {
    console.log("password: " + password);
    console.log("confirm password: " + confirm);
    if(password != confirm){
      alert("Password invalid");
    }
    else{
  // const data = { 
  //   email: "doe78@purdue.edu",
  //  firstName: "Jane",
  //        lastName: "Doe",
  //       password: "qwerty"
  // };

      updatepass(password);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={styles.logo}>Forgot Password</Text>
        <Text style={styles.inputLabel}>Email*</Text>
        <TextInput
        style={styles.inputText}
        // secureTextEntry={true}
        onChangeText={(email) => setEmail(email)}
        // value={email}
        placeholder="Email"
        />
        <Text style={styles.inputLabel}>New Password*</Text>
        <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        // value={password}
        placeholder="Password"
        />
        <Text style={styles.inputLabel}>Confirm Password*</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry={true}
          onChangeText={(confirm) =>setConfirm(confirm)}
          // value={confirm}
          placeholder="Confirm Password"
        />
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonWord} onPress= {() => shoot()}>Save Changes</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
    // backgroundColor: 'pink',
    borderRadius: 15,
    height: 45,
    alignItems: 'center',
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 20,
    alignItems: "flex-start",
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
    marginBottom: 10,
    paddingHorizontal: 40,
    paddingVertical: 10
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
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      marginBottom: 15,
      paddingVertical: 10,
      paddingHorizontal: 10
  }

});

export default Password;