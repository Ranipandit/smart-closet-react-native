/* @flow */

import * as React from 'react';
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Home from './home';
import Closet from './closet';
import ImagePreview from './imagepreview';
import Profile from './profile';

// State = {
//   index: number,
//   routes: {
//     key: string,
//     title: string,
//     icon: string,
//     color: string,
//   },
// };

const PhotoGallery = ({ route }) => {
  const PHOTOS = Array.from({ length: 24 }).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=${route.key}${i}`
  );

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {PHOTOS.map(uri => (
        <View key={uri} style={styles.item}>
          <Image source={{ uri }} style={styles.photo} />
        </View>
      ))}
    </ScrollView>
  );
};

export default class ButtomNavigationExample extends React.Component {
  static title = 'Bottom Navigation';

  state = {
    index: 0,
    routes: [
      { key: 'home',
        title: 'Home',
        icon: 'home',
        color: '#6200ee' },
      {
        key: 'closet',
        title: 'Closet',
        icon: 'inbox',
        color: '#2962ff',
      },
      {
        key: 'profile',
        title: 'Profile',
        icon: 'person',
        color: '#00796b',
      },
      // {
      //   key: 'purchased',
      //   title: 'Purchased',
      //   icon: 'shop',
      //   color: '#c51162',
      // },
    ],
  };

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={index => this.setState({ index })}
        // renderScene={BottomNavigation.SceneMap({
        //   home: Home,
        //   closet: Closet,
        //   profile: Profile,
          
        // })}
        renderScene={({ route, jumpTo }) => {
            switch (route.key) {
              case 'home':
                return <Home jumpTo={jumpTo}/>;
              case 'closet':
                return <Closet jumpTo={jumpTo} navigation={this.props.navigation}/>;
              case 'profile':
                return <Profile jumpTo={jumpTo} navigation={this.props.navigation}/>;
            }
        }}
      />
    );
   
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
    width: '80%',
    padding: 4,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});