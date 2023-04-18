import React, {useState,useEffect, Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { StackActions } from '@react-navigation/native';
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";
import ComponentWithFocus from './ComponentWithFocus';






export class History extends React.Component {
    state = {
      data: [],
      data1: 0
  }

    onFocus = () => {
      fetch(localhost + '/users/findBookings/' + emailparking, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then(json => {
        this.setState({ data: json });
    });
      
    }
    onFocus1 = () => {
      fetch(localhost + '/users/getCredits/' + emailparking, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then(json => {
        this.setState({ data1: json });
    });
      
    }



    delete(location,start_time,end_time,parking_date) {
      fetch(localhost + '/users/deleteBooking/'+emailparking+'/'+location+'/'+start_time +'/'+end_time +'/'+ parking_date, {
        method: 'DELETE',
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

    render() {
    //    const {navigate} = this.props.navigation;
       
       return (
        <ComponentWithFocus onFocus={()=> {this.onFocus() , this.onFocus1()}}>
        <View>
        <Text style={styles.baseText} paddingVertical > Your Bookings</Text>
        <FlatList
          data={this.state.data}
        
          keyExtractor={({ id }) => id.toString()}
          
          renderItem={({ item }) => (
            <View>
             <Text style={styles.inputText}>Location:{item.location} , Date:{item.parking_date}</Text>
            <TouchableOpacity  style = {styles.signBtn} onPress={this.delete.bind(this,item.location,item.start_time,item.end_time,item.parking_date)}><Text>CANCEL</Text></TouchableOpacity> 
            </View> 
          )}
        />
        <Text style={styles.baseText} paddingVertical > Your Credits</Text>
             <Text style={styles.inputText}>Credits:{this.state.data1} </Text>
           
        </View>
         </ComponentWithFocus>
          );
       
    }
  }
  export default History
  

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
    width: "60%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginLeft:90,
    borderWidth:2
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
});