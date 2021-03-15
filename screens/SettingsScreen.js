import * as React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import MyHeader from '../components/Header'
import db from '../config'
import firebase from 'firebase'
import { Alert } from 'react-native';

export default class DummyScreen extends React.Component {
  constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }
  getUserDetails =()=>{
     var user = firebase.auth().currentUser;
     var email = user.email;
     db.collection("Users").where("emailID","==",email).get() 
     .then(snapshot=>{
       snapshot.forEach(doc =>{
         var data=doc.data()
         this.setState({
          emailId   : email,
          firstName : data.firstName,
          lastName  : data.lastName,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
         })
       })
     })
  }
  updateDetails = ()=>{
    db.collection("Users").doc(this.state.docId).update({
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      address : this.state.address,
      contact:this.state.contact
    })
    Alert.alert("Profile updated Suessfulyy")
  }
  componentDidMount()
  {
    this.getUserDetails()

  }
  render()
  {
  return (
    <View style = {styles.container}>
        <MyHeader title="Settings"/>
        <View style = {styles.formContainer}>
        <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                Alert.alert("Are you sure?" , "" , [
                  {
                    text:"sure",
                    onPress:()=>{
                      this.updateDetails()
                    }

                  },
                  {
                  text:"cancel"
                  }
                ])
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fff"
  }
})