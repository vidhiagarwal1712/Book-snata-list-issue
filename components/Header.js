import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';

class MyHeader extends React.Component{
    render(){
  return (
    <Header
      centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
    />
  );
    }
};

export default MyHeader;