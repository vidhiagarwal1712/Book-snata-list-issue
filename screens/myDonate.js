import * as React from "react";
import { StyleSheet, Text, View, FlatList ,TouchableOpacity} from "react-native";
import { ListItem } from "react-native-elements";
import db from "../config";
import MyHeader from "../components/Header";

export default class BookDonateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      requestedBooksList: [],
    };
    this.requestRef = null;
  }
  getRequestedBooksList = () => {
    this.requestRef = db.collection("Book Requests").onSnapshot((snapshot) => {
      var bookList = snapshot.docs.map((doc) => doc.data());
      this.setState({
        requestedBooksList: bookList,
      });
    });
  };
  componentDidMount() {
    this.getRequestedBooksList();
  }
  componentWillUnmount() {
    this.requestRef=null;
  }
  keyExtractor = (item, index) => index.toString();
  renderItem = ({ item, i }) => {
    console.log("bye");
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
  render() {
    console.log(this.state.requestedBooksList);
    console.log("bye");
    return (
      <View style={styles.container}>
        <MyHeader title="DOnate Book" />
        <View style={{ flex: 1 }}>
          {this.state.requestedBooksList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Requested Books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
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
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },

  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
});
