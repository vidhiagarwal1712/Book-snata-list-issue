import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import BookDonateScreen from './screens/BookDonateScreen'
import BookRequestScreen from './screens/BookRequestScreen'
import CustomSideBarMenu  from './components/CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DummyScreen from './screens/DummyScreen'
import SettingScreen from './screens/SettingsScreen'

export default class App extends React.Component {
  render()
  {
  return (
    <AppContainer/>
  );
  }
}
const BottomNavigator=createBottomTabNavigator({
  Donation : {screen :  BookDonateScreen},
  Request : {screen :  BookRequestScreen }
})
const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : BottomNavigator
    },
    Vidhi : {
      screen : DummyScreen
    },
    Setting : {
      screen :SettingScreen
      }
  },
  
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen:WelcomeScreen},
  Drawer : { screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
