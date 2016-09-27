import React, { Component, PropTypes } from 'react'
import { Navigator, TouchableHighlight, AppRegistry, ScrollView, ListView, StyleSheet, Text, TextInput, View } from 'react-native'

import GreetingScene from 'greeting_scene'
import MoviesScene from 'movies_scene'


class ExploreReactNative extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}
      />
    )
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<GreetingScene navigator={navigator} title="Greetings Scene!"/>);
      case 'second':
        return (<MoviesScene navigator={navigator} title="Movies Scene!" />);
    }
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  blue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },
  contentContainer: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainSection: {
    flexDirection: 'row'
  },
});


AppRegistry.registerComponent('explorereactnative', () => ExploreReactNative);
