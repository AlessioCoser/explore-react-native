import React, { Component } from 'react'
import { NavigatorIOS, AppRegistry, ScrollView, ListView, StyleSheet, Text, TextInput, View } from 'react-native'
import Checkbox from 'react-native-custom-checkbox'
import Button from 'react-native-button'

class Movie extends Component {
  render() {
    return <Text>{this.props.title} | {this.props.releaseYear}</Text>
  }
}

class Movies extends Component {
  constructor(props) {
    super(props)
    const movies = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = { movies: movies.cloneWithRows([]) }
    this.fetchMovies()
  }

  fetchMovies() {
    const movies = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return fetch(this.props.from)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({movies: movies.cloneWithRows(responseJson.movies) })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  renderRow(movie) {
    return <Movie title={movie.title} releaseYear={movie.releaseYear}/>
  }

  render () {
    return (
      <View>
        <ListView
          dataSource={this.state.movies}
          renderRow={this.renderRow}
        />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={this.fetchMovies.bind(this)}>
          Reload Movie
        </Button>
      </View>
    )
  }
}

class Greeting extends Component {
  render() {
    return <Text style={this.props.style}>Hello {this.props.name}!</Text>
  }
}

class Greetings extends Component{
  constructor(props) {
    super(props)
    const greetings = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      greetings: greetings.cloneWithRows([
        {style: styles.blue, name: 'John'},
        {style: styles.red, name: 'Joel'},
        {style: styles.bigblue, name: 'James'},
        {style: null, name: 'Jimmy'},
        {style: styles.blue, name: 'Jackson'},
        {style: styles.red, name: 'Julie'},
        {style: styles.bigblue, name: 'Devin'},
        {style: null, name: 'Jillian'}
      ])
    }
  }

  renderRow(greeting) {
    return (
      <Greeting style={greeting.style} name={greeting.name}/>
    )
  }

  render() {
    if (!this.props.visible)
      return <Text></Text>

    return (
      <ScrollView>
        <Greeting name={this.props.title} />
        <ListView
          dataSource={this.state.greetings}
          renderRow={this.renderRow}
        />
      </ScrollView>
    )
  }
}

class MoviesScene extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Movies from="https://facebook.github.io/react-native/movies.json" />
        </View>
      </ScrollView>
    )
  }
}

class GreetingScene extends Component {
  constructor(props) {
    super(props)
    const greetings = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      showText: true,
      text: 'TYPE YOUR NAME'
    }
  }

  changeCheck(name, checked) {
    this.setState({showText: checked})
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <View style={{flex: 1}}>
            <TextInput
               style={{height: 40, minWidth: 200}}
               placeholder="Type here to translate!"
               value={this.state.text}
               onChangeText={(text) => this.setState({text: text})}/>

            <Checkbox
                checked={this.state.showText}
                style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5}}
                onChange={this.changeCheck.bind(this)}/>
          </View>
          <Greetings visible={this.state.showText} title={this.state.text}/>
        </View>
      </ScrollView>
    )
  }
}

class ExploreReactNative extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Greeting Scene',
          component: GreetingScene,
        }}
      />
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
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('explorereactnative', () => ExploreReactNative);
