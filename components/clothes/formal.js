import React, { Component } from 'react'
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import FloatingAction from './../floatingAction';

export default class Formal extends Component {

    // constructor(props) {
    //   super(props);
    //   //this.props.navigation.setParams({otherParam: 'Updated!'})
    //   //navigation.setParams({ param: value })
    //   props.navigation.setParams({name: 'Updated!'})
    // }
  
    render() {
      console.log('INSIDE Closet NNNNNNNNNNNNNNNNNNNNNNNNANANANANNANANANNANANNANANANANANNANAN')
      //console.log('sneha 35 ', this.props.navigation)
      return (
        <View style={{paddingBottom: 80}}>
          <Appbar.Header>
            {/* <Appbar.BackAction
              onPress={this._goBack}
            /> */}
            <Appbar.Content
              title="Formal"
              subtitle="All formal wears"
            />
            {/* <Appbar.Action icon="search" onPress={this._onSearch} />
            <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
          </Appbar.Header>
        
          <ScrollView contentContainerStyle={styles.content}>
              <View  style={styles.item}>
                <Image source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }} style={styles.photo} />
                <Text> Party Wear </Text>
              </View>
  
              <View  style={styles.item}>
                <Image source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }} style={styles.photo} />
                <Text> Casual Wear</Text>
              </View>
  
              <View  style={styles.item}>
                <Image source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }} style={styles.photo} />
                <Text> Tradtional Wear </Text>
              </View>
      
            {console.log(this.props.navigation)}
            <FloatingAction navigation={this.props.navigation}></FloatingAction>
          </ScrollView>
      </View>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
    content: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 4,
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