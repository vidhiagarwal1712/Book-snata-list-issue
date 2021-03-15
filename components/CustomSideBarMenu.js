import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";

export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} drawerSty />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton} onPress={() => {
              firebase.auth().signOut()
              this.props.navigation.navigate('WelcomeScreen')
          }}>
            <Text style={styles.logOutText}> Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    backgroundColor: '#c6cbef',
    flex: 0.8,
    width : 240
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  logOutButton: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    padding: 10,
  },
  logOutText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
