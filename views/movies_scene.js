/**
 * @providesModule movies_scene
 */

import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, TouchableHighlight, TextInput, ScrollView, ListView, View, Button } from 'react-native'

import Movie from 'movie'
import RemoteList from 'remote_list'

class MoviesScene extends Component {
  navBack() {
    this.props.navigator.pop()
  }

  fetchCall() {
    this.fetchItems();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <RemoteList
            item={Movie}
            from="https://facebook.github.io/react-native/movies.json"
            root="movies"
            fetchCall={this.fetchCall}
          />
        </View>
        <TouchableHighlight onPress={this.navBack.bind(this)}>
          <Text>Navigate back</Text>
        </TouchableHighlight>
      </ScrollView>
    )
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

export default MoviesScene
