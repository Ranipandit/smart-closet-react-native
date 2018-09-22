import React, {Component} from 'react';
import {AppRegistry ,View, Image ,StyleSheet, Text} from 'react-native';

export default class Backgroundimage extends Component {
    render(){
        return(
                <Image source={require('./images/clothes.gif')}
                  style={styles.backgroundImage}>

                  {this.props.children}

                </Image>
        
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});

AppRegistry.registerComponent('Backgroundimage', () => Backgroundimage);

