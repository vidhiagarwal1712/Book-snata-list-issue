import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import DB from "../config";

export default class DonationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      diplayList: [],
      lastFetchItem: "",
    };
    this.ref = null;
  }

  fetchDisplayList = () => {
    this.ref = DB.collection("Book Requests").onSnapshot((snapshot) => {
      var bookList = snapshot.docs.map((doc) => doc.data());
      this.setState({
      diplayList: bookList,
      });
    });
  };

  renderItem = ({ item, i }) => {
    console.log(item.book_name);

    return (
      <ListItem
      key={i}
      title={item.book_name}
      subtitle={item.reason_to_request}
      titleStyle={{ color: "yellow", fontWeight: "bold" }}
      rightElement={
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#ffff" }}>View</Text>
        </TouchableOpacity>
      }
      bottomDivider
    />
    );
  };
  keyExtractor = (item, index) => index.toString();
  componentDidMount() {
    console.log("HI")
    this.fetchDisplayList();
  }

  /*   componentWillUnmount() {
    this.ref = null;
  } */

  render() {
    console.log(this.state.diplayList)
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {this.state.diplayList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.diplayList}
              renderItem={this.renderItem}
            ></FlatList>
          )}
        </View>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  button: {
    marginHorizontal: 20,
    backgroundColor: "#4285F4",
    height: 30,
    width: 75,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 2,
  },

  title: {
    fontSize: 30,
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
