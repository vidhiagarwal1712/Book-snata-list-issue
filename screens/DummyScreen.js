import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class DummyScreen extends React.Component {
  render()
  {
  return (
    <View style = {{marginTop : 50}}>
        <Text>Hi dummy</Text>
    </View>
  );
  }
}