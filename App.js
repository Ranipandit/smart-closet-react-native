import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header} from 'react-native-elements';
import Home from './components/home';
// import NavigationBar from 'react-native-navigation-bar';
// import PropTypes from 'prop-types';


export default class App extends React.Component {
  

  render() {
    return (
      <View 
      style={styles.container}
      >
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SMART CLOSET', style: { color: '#fff', fontWeight: "bold" } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Home />
      </View>
     
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
