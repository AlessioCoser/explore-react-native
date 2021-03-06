/**
 * @providesModule greeting_scene
 */

import React, { Component, PropTypes } from 'react'
import { Navigator, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView, ListView, View, Button } from 'react-native'
import Checkbox from 'react-native-custom-checkbox'
import Greeting from 'greeting'

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

Greetings.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
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

  navSecond() {
    this.props.navigator.push({
      id: 'second'
    })
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
          <TouchableHighlight onPress={this.navSecond.bind(this)}>
            <Text>Navigate to second screen</Text>
          </TouchableHighlight>
        </View>
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

export default GreetingScene

