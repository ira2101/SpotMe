import React, {useState,useEffect, Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView, Modal,Pressable} from 'react-native';
import { color } from 'react-native-reanimated';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { StackActions } from '@react-navigation/native';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";
import ComponentWithFocus from './ComponentWithFocus';





export class Timings extends React.Component {
    state = {
      data: [],
      data1: [],
      time1:false,
      time2:false,
      time3:false,
      time4:false,
      time5:false,
      time6:false,
      time7:false,
      time8:false,
      time9:false,
      time10:false,
      time11:false,
      time12:false,
      modalVisible: false
  }

    onFocus = () => {
      fetch(localhost + '/users/findDateBookings/' + parkingname + "/" + dateslot, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then(json => {
        this.setState({ data: json });
        for(let i = 0; i < this.state.data.length;i++) {
          // console.log("Hello");
          if(this.state.data[i].start_time == "0") {
            this.setState({time1:true});
            // console.log(this.state.data.length);
          }
          if(this.state.data[i].start_time == "2") {
            this.setState({time2:true});
         }
         if(this.state.data[i].start_time == "4") {
          this.setState({time3:true});
         }
         if(this.state.data[i].start_time == "6") {
          this.setState({time4:true});
        }
        if(this.state.data[i].start_time == "8") {
          this.setState({time5:true});
        }
        if(this.state.data[i].start_time == "10") {
          this.setState({time6:true});
        }
        if(this.state.data[i].start_time == "12") {
          this.setState({time7:true});
        }
        if(this.state.data[i].start_time == "14") {
          this.setState({time8:true});
        }
        if(this.state.data[i].start_time == "16") {
          this.setState({time9:true});
        }
        if(this.state.data[i].start_time == "18") {
          this.setState({time10:true});
        }
        if(this.state.data[i].start_time == "20") {
          this.setState({time11:true});
        }
        if(this.state.data[i].start_time == "22") {
          this.setState({time12:true});
        }
  
      }
        // this.setState({data1: data});
    });
    //   fetch(localhost + '/groups/getAllInactive', {
    //     method: 'GET',
    // })
    //     .then((response) => response.json())
    //   .then((json) => this.setState({data1: json}))
    }

    setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
    }
    


    render() {
    //    const {navigate} = this.props.navigation;
      // console.log(this.state.data)
      // console.log(this.state.data.length)
      
      // console.log(this.state.time1)
       return (
        <ComponentWithFocus onFocus={()=>{this.onFocus()}}>
        <ScrollView>
        <View>
        <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Selection Completed go back to bookings page and complete the booking</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
          <Text style={styles.inputText}>Select from available time slots:</Text>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time1 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time1} onPress={() => {stime = "0"; etime="2";this.setModalVisible(true)}} >
                    <Text>12am - 2am</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time2 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time2} onPress={() => {stime = "2"; etime="4";this.setModalVisible(true)}}>
                    <Text>2am - 4am</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time3 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time3} onPress={() => {stime = "4"; etime="6";this.setModalVisible(true)}}>
                    <Text>4am - 6am</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time4 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time4} onPress={() => {stime = "6"; etime="8";this.setModalVisible(true)}}>
                    <Text>6am - 8am</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time5 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time5} onPress={() => {stime = "8"; etime="10";this.setModalVisible(true)}} >
                    <Text>8am - 10am</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time6 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time6} onPress={() => {stime = "10"; etime="12";this.setModalVisible(true)}}>
                    <Text>10am - 12pm</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time7 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time7} onPress={() => {stime = "12"; etime="14";this.setModalVisible(true)}}>
                    <Text>12pm - 2pm</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time8 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time8} onPress={() => {stime = "14"; etime="16";this.setModalVisible(true)}}>
                    <Text>2pm - 4pm</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time9 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time9} onPress={() => {stime = "16"; etime="18";this.setModalVisible(true)}} >
                    <Text>4pm - 6pm</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={{flexDirection:"row"}}>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time10 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time10} onPress={() => {stime = "18"; etime="20";this.setModalVisible(true)}}>
                    <Text>6pm - 8pm</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time11 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time11} onPress={() => {stime = "20"; etime="22";this.setModalVisible(true)}}>
                    <Text>8pm - 10pm</Text>
                  </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
                  <TouchableOpacity  style={{backgroundColor: this.state.time12 === true ? 'red' : 'green',borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold'}} disabled={this.state.time12} onPress={() => {stime = "22"; etime="24";this.setModalVisible(true)}} >
                    <Text>10pm - 12am</Text>
                  </TouchableOpacity>
              </View>
          </View>
          
        </View>

        <Text></Text>
        <Text></Text>
        {/* <TouchableOpacity style={styles.signBtn} onPress= {()=>this.addBooking()}>
          <Text style={styles.signText}>BOOK</Text>
        </TouchableOpacity> */}
        
        <Text></Text><Text></Text><Text></Text>
           
        </View>
        </ScrollView>
         </ComponentWithFocus>
         
          );
       
    }
  }
  export default Timings
  

// export default MyTabs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
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
  TextInput: {
    width:200,
    borderColor:"gray",
    borderWidth: 1,
    padding:10,
    paddingLeft:10,
   
    marginLeft:20
  },
  signBtn:{
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft:40,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold',
    color: "red"
  },
  signBt:{
    // width: "80%",
    borderRadius: 5,
    // height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft:10,
    borderWidth:1,
    fontSize:15,
    fontWeight: 'bold',
    color: "red",
    backgroundColor: "green",
  },

  signText:{
    color:"black",
    fontSize:20,
    borderRadius:25
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
    color:"gold"
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