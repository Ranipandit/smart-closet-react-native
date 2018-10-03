import React, { Component } from 'react'
import { Image, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, Appbar, Button } from 'react-native-paper';

export default class profile extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <View style={{paddingBottom: 80}}>
        <Appbar.Header>
          <Appbar.Content
            title="Profile"
            subtitle="account settings"
          />
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.content}>

          <Image source={require('./download.png')} style={{
            resizeMode: 'contain',
            //flex: 1,
            height: Dimensions.get('window').height / 3,
            width: '100%',
            // borderColor: 'red',
            // borderWidth: 2,
            // borderStyle: 'solid',
            // marginLeft: 50,
            //opacity: 0.8,
            //justifyContent: 'center',
            //alignContent: 'center'
          }}
          />
        
          <Text style={{minWidth: '100%', fontFamily: 'sans-serif', fontSize: 25, marginTop: 5}}>
            Name: 
          </Text>
          <Text style={{minWidth: '100%', fontFamily: 'sans-serif', fontSize: 25, marginTop: 5}}>
            Settings
          </Text>
          <Text style={{minWidth: '100%', fontFamily: 'sans-serif', fontSize: 25, marginTop: 5}}>
            Help
          </Text>
          <Button icon="add-a-photo" mode="contained" onPress={() => {console.log('Pressed'),this.props.navigation.navigate("Welcome")}}>
            Logout
          </Button>
          
      
          
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
  },
  item: {
    height: Dimensions.get('window').width / 2,
    width: '50%',
    padding: 4,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});