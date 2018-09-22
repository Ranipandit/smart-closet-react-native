import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header, Tile} from 'react-native-elements';
import {CameraKitCamera} from 'react-native-camera-kit';
// import NavigationBar from 'react-native-navigation-bar';
// import PropTypes from 'prop-types';

export default class App extends React.Component {
  

  render() {
    return (
      <View 
      // style={styles.container}
      >
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SMART CLOSET', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View  style={styles.tile} >
          <Tile
            style={{flex:3}}
            imageSrc={require('./images/clothes.gif')}
            resizeMode = 'cover'
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
            featured
            caption="Some Caption Text"
            s
          />
        </View>

         <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
        /> 

        <View>
          <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
              flex: 1,
              backgroundColor: 'white'
            }}
            cameraOptions={{
              flashMode: 'auto',             // on/off/auto(default)
              focusMode: 'on',               // off/on(default)
              zoomMode: 'on',                // off/on(default)
              ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
              ratioOverlayColor: '#00000077' // optional
            }}
            onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
            
          />
        </View>

      </View>
     
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tile : {
    height : 500,
  }
});
