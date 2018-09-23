import React , {Component} from 'react';
import {StyleSheet , AppRegistry, View, Text} from 'react-native';
import { Header} from 'react-native-elements';
import Backgroundimage from './backgroundImage';

export default class Home extends Component {
    render() {
        return(
            <View>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'SMART CLOSET', style: { color: '#fff', fontWeight: "bold" } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                 <Backgroundimage /> 
                <Text style={styles.text} {...this.props}>Welcome to Smart Closet</Text>
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