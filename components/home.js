import React , {Component} from 'react';
import {StyleSheet , AppRegistry, View, Text} from 'react-native';
// import Backgroundimage from './backgroundImage';

export default class Home extends Component {
    render() {
        return(
            <View>
                {this.props.children}
                {/* <Backgroundimage /> */}
                <Text style={styles.text} >Welcome to Smart Closet</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

AppRegistry.registerComponent('Home', () => Home);