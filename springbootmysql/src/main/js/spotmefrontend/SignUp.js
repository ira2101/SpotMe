// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
  Pressable,
} from "react-native";

const SignUp = () => {
  const [userName, setuname] = useState("");
  const [firstName, setfname] = useState("");
  const [lastName, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function adduser() {
    fetch(localhost + "/users/addUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        userPassword: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    })
      .then(function (response) {
        if (response.status === 200 || response.status === 201) {
          // Successful POST
          console.log("good");
          setModalVisible(true);
        } else {
          // Examine the text in the response
          console.log("issue");
        }
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  function addCredits() {
    fetch(localhost + '/users/addCredits/' + email , {
        method: 'POST',
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
                    // setModalVisible(true)
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

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.scrollView}>
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
              <Text style={styles.modalText}>Successful</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.baseText}>Getting Started </Text>
        <View style={styles.fixToText}>
          <Text style={styles.logText}>Already signed up? </Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login Here</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.inputText}>User Name</Text>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="User Name"
            placeholderTextColor="#003f5c"
            onChangeText={(userName) => setuname(userName)}
          />
        </View>
        <Text style={styles.inputText}>First Name</Text>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="First Name"
            placeholderTextColor="#003f5c"
            onChangeText={(firstName) => setfname(firstName)}
          />
        </View>
        <Text style={styles.inputText}>Last Name </Text>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Last Name"
            placeholderTextColor="#003f5c"
            onChangeText={(lastName) => setlname(lastName)}
          />
        </View>
        <Text style={styles.inputText}>Email Address </Text>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
            // call
            //value ={email}
          />
        </View>
        <Text style={styles.inputText}>Password </Text>

        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            // onChangeText={(password) => setPassword(password)}
          />
        </View>
        <Text style={styles.inputText}>Confirm Password </Text>
        <View>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
            //value = {password}
          />
        </View>
        <TouchableOpacity style={styles.signBtn} onPress={()=>{adduser() ; addCredits()}}>
          <Text style={styles.signText}>Sign Up</Text>
        </TouchableOpacity>
        {/* <Button style = {styles.signBtn} onPress={adduser}>
      <Text style={styles.signText}>SIGN UP</Text>
      </Button> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "flex-start",
    // // justifyContent: "flex-start",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: 50,
    paddingLeft: 10,
    paddingBottom: 1,
  },
  inputText: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  TextInput: {
    width: '70%',
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 10,

    marginLeft: 20,
  },
  signBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "green",
    marginLeft: 90,
  },
  signText: {
    color: "white",
    fontSize: 20,
  },
  backBtn: {
    alignItems: "flex-start",
    width: "30%",
    marginTop: 50,
    marginLeft: 10,
  },
  logText: {
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  loginBtn: {
    // width: "15%",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "green",
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  backText: {
    fontSize: 15,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default SignUp;
