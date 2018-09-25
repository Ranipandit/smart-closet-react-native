import React, { Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  View,
  ImageBackground,
  Animated,
  Image
} from "react-native";
import { Header } from "react-native-elements";
import { Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";

export default class Home extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }
  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "720deg"]
    });

    const animatedStyle = {
      transform: [{ rotate: interpolateRotation }]
    };

    return (
      <ImageBackground
        source={require('./images/clothes2.jpg')}
        style={{ width: "100%", height: "100%",  }}
      >
        <View style={styles.container}>
          <Header
            placement="left"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{
              text: "SMART CLOSET",
              style: { color: "#fff", fontWeight: "bold" }
            }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          <Animatable.Text
            animation="zoomInUp"
            iterationCount={9}
            direction="alternate"
            style={styles.text}
          >
            Welcome
          </Animatable.Text>
          <Animated.Text style={[styles.subText, animatedStyle]}>
            to Smart Closet
          </Animated.Text>

          <Button
            mode="contained"
            onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("Login");
            }}
            style={styles.button}
          >
            LOGIN
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("SignUp");
            }}
            style={styles.button}
          >
            SIGN UP
          </Button>

          <Image source={require("./images/smile2.gif")} style={styles.image1}>
            {this.props.children}
          </Image>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  text: {
    marginTop: 120,
    fontWeight: "bold",
    color: "white",
    fontSize: 60,
    textAlign: "center",
    justifyContent: "center"
  },
  subText: {
    fontSize: 30,
    marginBottom: 50,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 10,
    padding: 10
  },
  image1: {
    flexGrow: 1,
    marginTop: 10,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center"
  }
});

AppRegistry.registerComponent("Home", () => Home);
