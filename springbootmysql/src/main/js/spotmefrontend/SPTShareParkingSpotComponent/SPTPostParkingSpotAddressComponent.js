import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class SPTPostParkingSpotAddressComponent extends Component {
  state = {};

  formData = this.props.formData;

  render() {
    return (
      <ScrollView style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>
        <View style={styles.container}>
          <Text style={styles.fieldTitle}>Give the spot a name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.name = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.name}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.fieldTitle}>Street Address</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.streetAddress = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.streetAddress}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.fieldTitle}>City</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.city = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.city}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.fieldTitle}>State</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.state = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.state}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.fieldTitle}>Country</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.country = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.country}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.fieldTitle}>ZIP / Postal Code</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.formData.zipcode = text;
              this.props.setFormData(this.formData);
            }}
            value={this.formData.zipcode}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 10,
  },
  fieldTitle: {
    fontSize: 20,
    paddingBottom: 5,
  },
  textInput: {
    backgroundColor: "white",

    height: 45,
    width: "100%",

    borderWidth: 1.5,
    borderLeftColor: "rgba(120, 121, 130, 0.8)",
    borderTopColor: "rgba(120, 121, 130, 0.8)",
    borderRightColor: "rgba(120, 121, 130, 0.8)",

    borderBottomWidth: 2.5,
    borderColor: "rgba(120, 121, 130, 1)",

    borderRadius: 5,
  },
});

export default SPTPostParkingSpotAddressComponent;
