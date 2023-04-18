// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity , ScrollView, Button, Modal, Pressable, FlatList} from 'react-native';
// import SelectList from 'react-native-dropdown-select-list'
import Calendar from  "react-native-calendar-picker";
// import ComponentWithFocus from "./ComponentWithFocus";



const Book=({navigation})=> {
  //   const[userName,setuname] = useState('');
  //   const [firstName, setfname] = useState('');
  //   const [lastName, setlname] = useState('');
    const [email, setEmail] = useState('');
    const [slot, setSlot] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    // const[stime,setStime] = useState('');
    // const[etime,setEtime] = useState('');

    function adduser() {
      fetch(localhost + '/users/insertBooking', {
          method: 'POST',
          headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "email": emailparking,
            "location": parkingname,
            "start_time": stime,
            "end_time":etime,
            "parking_date":date.toString().substring(4,15)
  
            
          })
      })
          .then(
              function(response) {
                  if (response.status === 200 || response.status === 201) {
                      // Successful POST
                      console.log('good');
                      setModalVisible(true)
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

    function updateCredits() {
      fetch(localhost + '/users/updateCredits/' + emailparking + '/' + price, {
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
    
    dateslot = date.toString().substring(4,15);
    // parkingname = location;
    const [modalVisible, setModalVisible] = useState(false);
    return (
      
      <ScrollView style={styles.scrollView}>
      
      <View style={styles.container}>
      
        <Text style={styles.baseText}>Book a Spot </Text>
        {/* <Text style={styles.inputText}>Parking Name </Text>
         <View >
          <TextInput
            style={styles.TextInput}
            placeholder="Parking name"
            placeholderTextColor="#003f5c"
            onChangeText={(location) => setLocation(location)}
            // call
            //value ={email}
          />
        </View>  */}
        {/* <FlatList
          data={data}
        
          keyExtractor={({ id }) => id.toString()}
          
          renderItem={({ item }) => (
            <TouchableOpacity  style = {styles.signBtn}><Text>Location:{item.start_time}</Text></TouchableOpacity>

          )}
        /> */}
        <Text style={styles.inputText}>Select a date </Text>
         <View >
          <Calendar style= {{borderRadius:10, elevation:4, margin:40}}
          onDateChange={(date) => {
            setDate(date);
            // navigation.navigate('BookedSlots');
            // data = onFocus(location,date);
            // console.log(data);
            // setModalVisible(true)
            
        }}  />
        </View> 
        <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate('Timing')}>
          <Text style={styles.inText}> CHECK SLOTS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate('Rate')}>
          <Text style={styles.inText}> ADD RATING</Text>
        </TouchableOpacity>
        <Text style={styles.inputText}>Selected date: {date.toString().substring(4,15)} </Text> 
        
        {/* <FlatList
                // data={this.state.data}
                data={data}
                keyExtractor={({ id }) => id.toString()}
                
                renderItem={({ item }) => (
                  
                  <Text>Name:{item}</Text>
                )}
        /> */}
        {/* <Text>{data}</Text> */}

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
              <Text style = {styles.modalText}>Successful</Text>
              {/* <Text>{data.email}</Text> */}

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        
        <TouchableOpacity style={styles.signBtn} onPress={() => {adduser(), updateCredits()}}>
          <Text style={styles.signText}>BOOK</Text>
        </TouchableOpacity>
        {/* <Button style = {styles.signBtn} onPress={adduser}>
        <Text style={styles.signText}>SIGN UP</Text>
        </Button> */}
        
      </View>
      
      </ScrollView>
    );
    
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    baseText: {
      fontWeight: 'bold',
      fontSize: 30,
      paddingTop: 50,
      paddingLeft:10,
      paddingBottom:1
    },
    inputText: {
      fontSize: 20,
      paddingTop:5,
      paddingBottom:10,
      paddingLeft:20
    },
    inText:{
      color:"white",
      fontSize:15
    },
    TextInput: {
      width:200,
      borderColor:"gray",
      borderWidth: 1,
      padding:10,
      paddingLeft:10,
      marginLeft:20
    },
    StartInput: {
      width:100,
      borderColor:"gray",
      borderWidth: 1,
      justifyContent: 'flex-start',
      padding:10,
      paddingLeft:10,
      marginLeft:20
    },
    EndInput: {
      width:100,
      borderColor:"gray",
      borderWidth: 1,
      justifyContent: 'flex-end',
      padding:10,
      paddingLeft:10,
      marginLeft:20
    },
    signBtn:{
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "green",
      marginLeft:90
    },
    
    signText:{
      color:"white",
      fontSize:20
    },

    backBtn: {
      alignItems: "flex-start",
      width:"30%",
      marginTop: 50,
      marginLeft: 10
    },
     logText: {
      fontSize: 14,
      paddingTop:2,
      paddingBottom:10,
      paddingLeft:20
    },
    loginBtn:{
      width: "15%",
      height: 25,
      alignItems: "center",
      justifyContent: "center",
  
      
    },
    loginText:{
      color:"green",
      fontWeight:"bold",
      alignItems:"flex-start"
    },
    backText:{
      fontSize:15
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    }
  });
  export default Book;