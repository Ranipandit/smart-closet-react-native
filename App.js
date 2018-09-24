import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home.js';
import BackgroundImage from './components/backgroundImage';


export default class App extends React.Component {
  

  render() {
    return (
      <View 
      style={{flex : 1}}
      >
        <Home />
        {/* <BackgroundImage /> */}

      </View>
     
    );
  }
}