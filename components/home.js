import React , {Component} from 'react';
import {StyleSheet , AppRegistry, View, Text , ImageBackground, Animated, Image} from 'react-native';
import { Header} from 'react-native-elements';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
/*const MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);*/


export default class Home extends Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.animatedValue , {
            toValue: 1,
            duration : 1500
        }).start()
    }
    render() {

        const interpolateRotation = this.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange: ['0deg', '720deg'],
        })

        const animatedStyle ={
            transform : [
                { rotate : interpolateRotation }
            ]
        }

        

        return(
            <View>
                    <Header
                        placement="left"
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'SMART CLOSET', style: { color: '#fff', fontWeight: "bold" } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        />
                    
                {/* <ImageBackground source={require('/images/clothes.gif')} style={{width: '100%', height:'100%' }}>      */}
                    <Animatable.Text animation="zoomInUp" iterationCount={9} direction="alternate" style={styles.text}>Welcome</Animatable.Text>
                    <Animated.Text style={[styles.subText, animatedStyle]}>to Smart Closet</Animated.Text>

                    <Button mode="contained" onPress={() => alert('Pressed')} style={styles.button}>
                        Sign Up
                    </Button>
                    <Button mode="contained" onPress={() => alert('Pressed')} style={styles.button}>
                        Login
                    </Button>

                    {/* <Image source={require('/images/smile1.gif')}/> */}
                    <Image source={require('./images/smile1.gif')} style={styles.image1}>
                        {this.props.children}
                    </Image>

               
                {/* </ImageBackground>*/}
            </View>                     
        );
    }
}

 const styles = StyleSheet.create({
    text: {
        marginTop: 150,
        fontWeight: 'bold',
        color : 'black',
        fontSize : 40,
        textAlign : 'center',
        justifyContent: 'center', 
    },
    subText : {
        fontSize: 20,
        marginBottom:50,
        fontWeight: 'bold',
        color : 'black',
        textAlign : 'center',
        justifyContent: 'center', 
    },
    button : {
        marginTop : 10,
        padding : 10,

    },
    image1 : {
        flexGrow: 1 ,
        marginTop: 10,
        width : 130,
        height : 130,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
}); 

AppRegistry.registerComponent('Home', () => Home);